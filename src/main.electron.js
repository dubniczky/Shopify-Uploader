const Electron = require('electron')
const Generator = require('./generate')

const app = Electron.app
const dialog = Electron.dialog

let window = null
let windowSize = (800, 600)

app.on('ready', () => {
    window = new Electron.BrowserWindow({
        width: windowSize[0],
        height: windowSize[1],
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.setMenuBarVisibility(null)
    window.webContents.openDevTools()

    //Load page
    window.loadFile('./app/index.html')

    Electron.globalShortcut.register('f5', function() {
        window.reload()
    })
})

// When all windows are closed exit the app, except in macOS.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
  
// When the application gets activated create the main window if one does not exist
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        //createMainWindow()
    }
})

// On generate event
Electron.ipcMain.on('generate', (event, args) => {
    //Generate params:
    console.log(args)
    Generator(args)
    console.log('done')
})

// On open directory event
Electron.ipcMain.on('open-dir-dialog', function (event) {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then((files) => {
        console.log(files)
        event.sender.send('selected-dir', files)
    }).catch(err => console.log(err))
})