import React from "react";
import TodayTaskTimeline from "../../../components/tasksApp/todayTaskTimeLine";
import "../../../pagesStyles/task.css";
import { getTodayTasks } from "../../../backend/backendFunctions";
import { useLoaderData } from "react-router-dom";
export default function TodayTaskPage() {
  const data = useLoaderData();
  const [todayTasks, setTodayTasks] = React.useState(data ? data : null);
  return (
    <div className="today-task-page-container">
      <TodayTaskTimeline todayTasks={todayTasks} />
    </div>
  );
}

export async function loader() {
  const todayTasks = await getTodayTasks();
  if (!todayTasks) {
    return null;
  }
  return todayTasks;
}
