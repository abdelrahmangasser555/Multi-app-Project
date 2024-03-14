import { Sandpack } from "@codesandbox/sandpack-react";
import Editor from '@monaco-editor/react';
// import "@codesandbox/sandpack-react/dist/index.css";
import "../../pagesStyles/reactPlayground.css"
export default function ReactPlayground() {
  return (
    <div className="react-playground-container"> 
      <h1 className="react-playground-heading">React <span>Playground</span> App</h1>
      <p className="react-playground-description">
        run some react code down there and feel free to play around with it
      </p>
      <div style = {{height : "60vh"}}>
        <Sandpack template="react" className = "react-playground-editor"/>
      </div>
    </div>
  );
}