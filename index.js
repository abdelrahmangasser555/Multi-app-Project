import { app, BrowserWindow, ipcMain } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      protocol: {
        end: [".js", ".jsx", ".html", ".css"],
        mimeType: {
          ".js": "application/javascript",
          ".jsx": "application/javascript",
          ".html": "text/html",
          ".css": "text/css",
        },
      },
    },
  });
  win.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
    console.error(
      `Failed to load web contents: ${errorCode} - ${errorDescription}`
    );
  });

  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// darwin close
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
