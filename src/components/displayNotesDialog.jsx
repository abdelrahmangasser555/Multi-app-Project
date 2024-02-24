export default function DisplayNotesDialog({
  title,
  content,
  date,
  index,
  noteIndex,
}) {
  return (
    <dialog
      id={`display-notes-dialog-${index}-${noteIndex}`}
      className="display-notes-modal-container modal"
    >
      <div className="modal-box">
        <h3 className="display-note-modal-title modal-title font-bold text-lg">
          {title}
        </h3>
        <p className="display-note-dialog-content">{content}</p>
        <p className="display-note-dialog-date">{date}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
