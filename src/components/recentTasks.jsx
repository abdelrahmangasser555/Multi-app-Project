import React from "react";

export default function RecentTasks() {
  return (
    <div className="today-task-container">
      <div className="today-task-timeline">
        <h1>task timeline</h1>
      </div>
      <div className="today-task-notes">today notes</div>
    </div>
  );
}

export function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RecentTasks);
    }, 1000);
  });
}
