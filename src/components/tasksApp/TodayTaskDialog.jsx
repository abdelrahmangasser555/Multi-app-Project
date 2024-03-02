import React from "react";

export default function TodayTaskDialog() {
  return (
    <dialog className="task-dialog modal" id="task-dialog">
      <div className="task-modal-box modal-box">
        <h3 className="modal-task-title modal-title font-bold text-lg">
          Add Task
        </h3>
        <div className="my-data-inputs">
          <input
            className="input-task-name input"
            type="text"
            placeholder="input the task"
            name="task-name"
          />
          <input
            className="input-task-date input"
            type="time"
            placeholder="input the task date"
            name="task-date"
          />
        </div>
        <textarea
          className="textarea-task-description textarea textarea-info"
          placeholder="input the more task details here ..."
          name="description"
        ></textarea>
        <button className="add-task-button btn">add</button>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">close</button>
        </form>
      </div>
    </dialog>
  );
}
