export default function AddFileDialog() {
  return (
    <dialog className="add-file-dialog modal" id="add-file-dialog">
      <div className="add-file-modal-box modal-box">
        <h3 className="modal-title font-bold text-lg">Add File</h3>
        <input
          className="input-file-name input"
          type="text"
          placeholder="file name ..."
        />
        <button className="add-file-button btn">add</button>
        <form method="dialog">
          <button className="close-button btn">close</button>
        </form>
      </div>
    </dialog>
  );
}
