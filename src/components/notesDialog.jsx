import React from "react";
import Editor from "@monaco-editor/react";
import { addNoteToVideo } from "../backend/backendFunctions";

export default function NotesDialog({ index, setVedioObjects }) {
  const [myNotes, setMyNotes] = React.useState({
    title: "",
    content: "",
    code: "",
  });

  // Function to handle changes in the input fields
  function handleInputChange(e) {
    const { name, value } = e.target;
    setMyNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value,
    }));
  }

  // Function to handle adding a new note
  function handleAddNote() {
    // Add the note to the corresponding video
    addNoteToVideo(myNotes, index);

    // Clear the input fields
    setMyNotes({ title: "", content: "", code: "" });
    const date = new Date();
    // Update the videoObjects state to reflect the changes
    setVedioObjects((prevVedios) =>
      prevVedios.map((vedio, i) => {
        if (i === index) {
          // Add the new note to the notesNames array of the corresponding video
          vedio.notesNames.unshift({ ...myNotes, date: date.toDateString() });
        }
        return vedio;
      })
    );
  }
  const handleEditorCodeChange = (value, event) => {
    setMyNotes((prevNotes) => ({
      ...prevNotes,
      code: value,
    }));
  };
  return (
    <dialog id={`notes-dialog-id-${index}`} className="modal">
      <div className="modal-box">
        <h3 className="modal-title font-bold text-lg">Enter Note below</h3>
        <input
          className="title-dialog-input input"
          placeholder="Add a title"
          name="title"
          value={myNotes.title}
          onChange={handleInputChange}
        />
        <textarea
          className="text-area-input textarea textarea-bordered textarea-lg w-full max-w-xs"
          placeholder="Note info goes here..."
          name="content"
          value={myNotes.content}
          onChange={handleInputChange}
        />
        <Editor
          height="18vh"
          defaultLanguage="javascript"
          defaultValue="//add some code in here ..."
          value={myNotes.code}
          theme="vs-dark"
          onChange={handleEditorCodeChange}
        />
        <button
          className="add-note-button btn btn-outline btn-accent"
          onClick={handleAddNote}
        >
          Add Note
        </button>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
