import React from "react";
import { addNoteToVideo } from "../backend/backendFunctions";

export default function NotesDialog({ index, setVedioObjects }) {
  const [myNotes, setMyNotes] = React.useState({
    title: "",
    content: "",
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
    setMyNotes({ title: "", content: "" });

    // Update the videoObjects state to reflect the changes
    setVedioObjects((prevVedios) =>
      prevVedios.map((vedio, i) => {
        if (i === index) {
          // Add the new note to the notesNames array of the corresponding video
          vedio.notesNames.push(myNotes);
        }
        return vedio;
      })
    );
  }

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
        <button
          className="add-link-button btn btn-outline btn-accent"
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
