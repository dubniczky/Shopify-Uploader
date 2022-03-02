const fs = require('fs')
const path = require('path')
const model = require('./csv-model')


// Helper methods

function generateDefault() {
    return model.map( (field) => field.default )
}

function generateHeader() {
    return model.map( (field) => field.name )
}

function toBase64Url(str) {
    return Buffer.from(str).toString('base64url')
}

function padInt(val, length = 4) {
    return String(val).padStart(length, '0')
}

module.exports = function(params) {
    if (params.directory.charAt(params.directory.length - 1) != '/') {
        params.directory += '/'
    }

    //Process params
    //   Collection ID: '2021-11-23' -> '211123'
    const collectionid = `${params.date.slice(2, 4)}${params.date.slice(5, 7)}${params.date.slice(8, 10)}`
    const collectionName = params.collection
    //   List dir and extract only file names
    //const images = Fs.readdirSync(params.directory, {withFileTypes:true }).map((ent) => ent.name)

    const images = []
    const folders = fs.readdirSync(params.directory)
    console.log("Read folders:", folders.length)

    for (const folder of folders) {
        // Load images from folder
        const files = fs.readdirSync(`${params.directory}${folder}/`, {withFileTypes:true })
        for (const file of files) {
            images.push({
                path: `${toBase64Url(folder)}/${file.name}`,
                folder: folder,
                name: file.name
            })
        }

        // Update folder to url-safe
        fs.renameSync(`${params.directory}${folder}/`, params.directory + toBase64Url(folder))
    }

    //   Add trailing slash if not present
    const imagePrefix = params.webPrefix + (params.webPrefix.charAt(params.webPrefix.length - 1) == "/" ? "" : "/")

    let lines = [ generateHeader() ]
    for (let i in images) {
        let id = `${collectionid}${padInt(Number(i)+1)}`
        let { name, path, folder } = images[i]
        
        //Add main line
        let line = generateDefault()
        line[0]  = id //Handle
        line[24] = id //Barcode
        line[2]  = params.bodypref + " " + folder //Body
        line[6]  = folder //Tags
        line[9]  = params.variants[0].name //License name
        line[1]  = id //Title
        line[34] = collectionName //Collection
        line[25] = imagePrefix + path //Imge source
        line[20] = params.variants[0].value //Price
        lines.push(line)

        //Other variants
        for (let i = 1; i < params.variants.length; i++) {
            let variant = Array(35)
            variant[0]  = id //Handle
            variant[9]  = params.variants[i].name //License name
            variant[18] = 'continue'
            variant[19] = 'manual'
            variant[20] = params.variants[i].value //Price
            variant[22] = false
            variant[23] = false
            lines.push(variant)
        }
    }

    //Make csv
    let csv = lines.map( (l) => l.join(',') ).reduce( (p, c) => `${p}\n${c}` )
    fs.writeFileSync('out.csv', csv, 'utf8')
}