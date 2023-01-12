// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

export const api = {
  send: (data: string) => {
    ipcRenderer.send("message", data);
  },
};

ipcRenderer.on("reply", (event, arg) => {
  console.log("Message from main: ", arg);
});

contextBridge.exposeInMainWorld("api", api);
