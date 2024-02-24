import React from "react";
import { addNoteToVideo } from "../backend/backendFunctions";
export default function NotesDialog({
  index,
  myNotes,
  setMyNotes,
  setVedioObjects,
}) {
  function handleIdChange(e) {
    const { name, value } = e.target; // Corrected from e.value to e.target
    setMyNotes({ ...myNotes, [name]: value });
  }

  return (
    <dialog id="notes-dialog-id" className="modal">
      <div className="modal-box">
        <h3 className="modal-title font-bold text-lg">Enter Note below</h3>
        <input
          className="title-dialog-input input"
          placeholder="add a title"
          name="title"
          value={myNotes.title}
          onChange={(e) => handleIdChange(e)} // Added onChange handler here
        />
        <textarea
          className="text-area-input textarea textarea-bordered textarea-lg w-full max-w-xs"
          type="text"
          placeholder="note info goes here ..."
          name="content"
          onChange={(e) => handleIdChange(e)} // This was correct
          value={myNotes.content}
        />
        <button
          className="add-link-button btn btn-outline btn-accent"
          onClick={() => {
            addNoteToVideo(myNotes, index);
            setMyNotes({ title: "", content: "" });
            setVedioObjects((prevVedios) =>
              prevVedios.map((vedio, i) => {
                if (i === index) {
                  vedio.notesNames.push(myNotes);
                }
                return vedio;
              })
            );
          }}
        >
          add Note
        </button>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
