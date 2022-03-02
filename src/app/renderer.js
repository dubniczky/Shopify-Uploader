const { ipcRenderer } = require('electron')


const imgDirButton = document.getElementById('img-folder-selector')
const imgDirInput = document.getElementById('img-folder')


const variantCount = 3

function ival(id) {
    return document.getElementById(id).value
}

function startGenerate() {
    let data = {
        collection: ival('collection'),
        webPrefix: ival('web-prefix'),
        directory: ival('img-folder'),
        date: ival('date'),
        bodypref: ival('bodypref'),
        variants: []
    }

    for (let i = 0; i < variantCount; i++) {
        data.variants.push({
            name: ival('category-name-' + (i+1)),
            value: ival('category-price-' + (i+1))
        })
    }
    console.log(data)

    ipcRenderer.send('generate', data)
    console.log('renderer sent')
}

// Select directory

imgDirButton.addEventListener('click', function (event) {
    ipcRenderer.send('open-dir-dialog')
    event.preventDefault()
    return false
});

ipcRenderer.on('selected-dir', function (event, data) {
    console.log(data)
    if (!data.canceled) {        
        imgDirInput.value = data.filePaths[0]
    }    
})

document.getElementById('start-button').addEventListener('click', startGenerate)
console.log('loaded')