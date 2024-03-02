import React from "react";
import TodayTaskTimeline from "../../../components/tasksApp/todayTaskTimeLine";
import "../../../pagesStyles/task.css";
export default function TodayTaskPage() {
  return (
    <div className="today-task-page-container">
      <TodayTaskTimeline />
    </div>
  );
}
