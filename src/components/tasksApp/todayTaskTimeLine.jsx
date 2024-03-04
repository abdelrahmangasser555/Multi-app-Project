import React from "react";
import "../taskStyles/taskApp.css";
import { Chrono } from "react-chrono";
import { todayTimeLineData } from "../fakeData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBeer } from "react-icons/fa";
import TodayTaskDialog from "./TodayTaskDialog";
import { addTaskToDb } from "../../backend/backendFunctions";
import { GiFinishLine } from "react-icons/gi";
export default function TodayTaskTimeline({ todayTasks, setTodayTasks }) {
  const [taskData, setTaskData] = React.useState({
    taskName: "",
    taskDate: "",
    taskDescription: "",
    endTime: "",
    status: "uncomplete",
  });

  const [notification, setNotification] = React.useState(null);

  async function handleAddTaskToDb(taskData) {
    console.log("data base function activated");
    const success = await addTaskToDb(taskData);
    if (success === "task added successfully") {
      setNotification({ message: success, type: "alert-success" });
    } else {
      setNotification({ message: success, type: "alert-warning" });
    }
    setTodayTasks((prevTasks) => {
      return [
        {
          ...prevTasks,
          tasks: [...prevTasks[0].tasks, taskData],
        },
      ];
    });
    setTaskData({
      taskName: "",
      taskDate: "",
      taskDescription: "",
      endTime: "",
      status: "uncomplete",
    });
  }

  function handleTaskDataChange(e) {
    const { name, value } = e.target;
    setTaskData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <div className="today-task-timeline" id="horizontal-mode">
      {notification ? (
        <div
          role="alert"
          className={`alert ${notification.type}`}
          id="top-today-task-notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{notification.message}</span>
        </div>
      ) : null}
      <button
        onClick={() => {
          document.getElementById("task-dialog").showModal();
        }}
        className="btn"
        id="add-task-button"
      >
        add task
      </button>
      <VerticalTimeline>
        {todayTasks[0]?.tasks?.map((data, index) => {
          return (
            <div key={index}>
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--work `}
                date={data.taskDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "blue" }}
                icon={<FaBeer />}
                dateClassName="date-time-line"
              >
                <h3 className="vertical-timeline-element-title">
                  {data.taskName}
                  <h4
                    className={`vertical-timeline-element-subtitle ${data.status}`}
                  >
                    {data.status}
                  </h4>
                </h3>
                <p>{data.taskDescription}</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--work`}
                date={data.endTime}
                iconStyle={{
                  background: "white",
                  color: "black",
                  fontSize: "100px",
                }}
                icon={<GiFinishLine />}
                dateClassName="end-time-line"
              ></VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
      <TodayTaskDialog
        setTaskData={setTaskData}
        handleAddTaskToDb={handleAddTaskToDb}
        handleTaskDataChange={handleTaskDataChange}
        taskData={taskData}
      />
    </div>
  );
}
