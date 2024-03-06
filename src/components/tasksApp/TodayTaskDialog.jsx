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
        <input
          className="input-task-name input"
          type="text"
          placeholder="input the task"
          name="taskName"
          onChange={(e) => handleTaskDataChange(e)}
          value={taskData.taskName}
        />
        <div className="my-data-inputs">
          <div className="heading-time">
            start time
            <input
              className="input-task-date-after input"
              type="time"
              placeholder="input the task date"
              name="taskDate"
              onChange={(e) => handleTaskDataChange(e)}
              value={taskData.taskDate}
            />
          </div>
          <div className="heading-time">
            end time
            <input
              className="input-task-date-after input"
              type="time"
              name="endTime"
              onChange={(e) => handleTaskDataChange(e)}
              value={taskData.endTime}
            />
          </div>
        </div>
        <textarea
          className="textarea-task-description textarea textarea-info"
          placeholder="input the more task details here ..."
          name="taskDescription"
          onChange={(e) => handleTaskDataChange(e)}
          value={taskData.taskDescription}
        ></textarea>
        <button
          className="add-task-button btn"
          onClick={() => handleAddTaskToDb(taskData)}
        >
          add
        </button>
        <form method="dialog">
          <button className="close-button btn">close</button>
        </form>
      </div>
    </dialog>
  );
}
