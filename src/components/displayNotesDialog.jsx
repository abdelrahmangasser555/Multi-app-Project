export default function DisplayNotesDialog({
  title,
  content,
  code,
  date,
  index,
  noteIndex,
}) {
  // write a function that takes the code and split it by new line
  function splitCodeByNewLineToArray(code) {
    return code.split("\n");
  }
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
        {code && (
          <div className="code-note-snippet mockup-code">
            {splitCodeByNewLineToArray(code).map((line, i) => (
              <pre data-prefix={i + 1} key={i}>
                <code>{code}</code>
              </pre>
            ))}
          </div>
        )}
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
