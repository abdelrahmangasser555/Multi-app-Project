export default function DisplayNotesDialog(props) {
  return (
    <dialog id="display-notes-dialog" className="modal">
      <div className="modal-box">
        <h3 className="modal-title font-bold text-lg">Add New vedio</h3>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
