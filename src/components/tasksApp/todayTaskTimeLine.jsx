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
export default function TodayTaskTimeline() {
  const [taskData, setTaskData] = React.useState({
    taskName: "",
    taskDate: "",
    taskDescription: "",
  });

  function handleAddTaskToDb() {
    console.log("add task to db");
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
      <VerticalTimeline>
        {todayTimeLineData.map((data, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work `}
              date="2021-09-01"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "blue" }}
              icon={<FaBeer />}
              dateClassName="date-time-line"
            >
              <h3 className="vertical-timeline-element-title">
                {data.cardTitle}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {data.cardSubtitle}
              </h4>
              <p>{data.cardDetailedText}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <button
        onClick={() => {
          document.getElementById("task-dialog").showModal();
        }}
      >
        add task
      </button>
      <TodayTaskDialog
        setTaskData={setTaskData}
        handleAddTaskToDb={handleAddTaskToDb}
        handleTaskDataChange={handleTaskDataChange}
      />
    </div>
  );
}
