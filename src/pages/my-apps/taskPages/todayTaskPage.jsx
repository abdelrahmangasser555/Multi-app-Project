import React, { Suspense } from "react";
import TodayTaskTimeline from "../../../components/tasksApp/todayTaskTimeLine";
import "../../../pagesStyles/task.css";
import { getTodayTasks } from "../../../backend/backendFunctions";
import { useLoaderData, defer, Await } from "react-router-dom";
import LoadingTasks from "../../../components/loadingTasks";
export default function TodayTaskPage() {
  const data = useLoaderData();
  const [todayTasks, setTodayTasks] = React.useState(data ? data : null);
  return (
    <div className="today-task-page-container">
      <Suspense fallback={<LoadingTasks />}>
        <Await resolve={data.todayTasks}>
          {(todayTasks) => {
            return (
              <TodayTaskTimeline
                todayTasks={todayTasks}
                setTodayTasks={setTodayTasks}
              />
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export async function loader() {
  const todayTasks = getTodayTasks();
  console.log("jomana 7abebt albey");
  return defer({ todayTasks: todayTasks });
}
