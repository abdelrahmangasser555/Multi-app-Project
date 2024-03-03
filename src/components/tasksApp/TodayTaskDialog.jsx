import React from "react";

export default function TodayTaskDialog({
  setTaskData,
  handleAddTaskToDb,
  handleTaskDataChange,
  taskData,
}) {
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
            name="taskName"
            onChange={(e) => handleTaskDataChange(e)}
          />
          <input
            className="input-task-date input"
            type="time"
            placeholder="input the task date"
            name="taskDate"
            onChange={(e) => handleTaskDataChange(e)}
          />
        </div>
        <textarea
          className="textarea-task-description textarea textarea-info"
          placeholder="input the more task details here ..."
          name="taskDescription"
          onChange={(e) => handleTaskDataChange(e)}
        ></textarea>
        <button
          className="add-task-button btn"
          onClick={() => handleAddTaskToDb(taskData)}
        >
          add
        </button>
        <form method="dialog">
          <button className="btn">close</button>
        </form>
      </div>
    </dialog>
  );
}
