import React, { useState, useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import Editor from "@monaco-editor/react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import "../../pagesStyles/reactPlayground.css";

export default function ReactPlayground() {
  const [files, setFiles] = useState({});
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [toggleConsole, setToggleConsole] = useState(false);

  // Function to add a new file to the sandbox
  function handleAddFiles() {
    const fileName = prompt("Enter the file name");
    setFiles({ ...files, [fileName]: { code: `//write your code here` } });
  }
  function handleSavingFiles() {
    localStorage.setItem("files", JSON.stringify(files));
    console.log("files saved", files);
  }
  // Function to handle file changes
  function handleChange(newFiles) {
    const changedFileName = Object.keys(newFiles)[0]; // Get the name of the changed file
    const changedFileContent = newFiles[changedFileName].code; // Get the content of the changed file
    const message = `File '${changedFileName}' changed:\n${changedFileContent}`;
    logToConsole(message); // Log the file change to the console
    setFiles(newFiles); // Update the files in the state
  }

  // Function to append logs to the console
  function logToConsole(message) {
    setConsoleLogs((prevLogs) => [...prevLogs, message]);
  }

  useEffect(() => {
    // Define the event handler function
    function handleMessage(event) {
      if (event.data && event.data.type === "console") {
        logToConsole(event.data.payload);
      }
    }

    // Add the event listener
    window.addEventListener("message", handleMessage);

    // Clean up the event listener
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  // creating dom manipulations to the above button
  return (
    <div className="react-playground-container">
      <h1 className="react-playground-heading">
        React <span>Playground</span> App
      </h1>
      <p className="react-playground-description">
        Run some React code down there and feel free to play around with it.
      </p>
      <div style={{ height: "60vh", position: "relative" }}>
        <SandpackProvider
          files={files}
          template="vite-react"
          theme={nightOwl}
          options={{ layout: "console" }}
        >
          <SandpackLayout style={{ paddingTop: "80px" }}>
            <SandpackFileExplorer onChange={handleChange} />
            <SandpackCodeEditor onChange={handleChange} />
            <SandpackPreview />
            {toggleConsole && <SandpackConsole logs={consoleLogs} />}
          </SandpackLayout>
        </SandpackProvider>
        <button
          className="add-file-button btn btn-ghost"
          onClick={handleAddFiles}
        >
          Add File
        </button>
        <div className="top-bar-container">
          <button
            className="save-file-button btn btn-ghost"
            onClick={handleSavingFiles}
          >
            Save File
          </button>
          <button
            className="toggle-console-button btn btn-ghost"
            onClick={() => setToggleConsole(!toggleConsole)}
          >
            {toggleConsole ? "Hide Console" : "Show Console"}
          </button>
        </div>
      </div>
    </div>
  );
}
