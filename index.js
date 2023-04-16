const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = (isInit = true) => {

  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname + '/preload.js')
    }
  })

  if(isInit){
    ipcMain.handle('ping', () => 'pong')
  }

  window.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow(false)
    }
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})