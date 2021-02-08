const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        maximizable: true
    })
    mainWindow.loadURL(`File://${__dirname}/index.html`)
})
