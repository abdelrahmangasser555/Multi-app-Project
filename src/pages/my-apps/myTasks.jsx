import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function MyTasksApp() {
  return (
    <div className="notes-app-container">
      <nav className="my-navigation-in-tasks-app">
        <NavLink
          to="allTasks"
          className={({ isActive }) =>
            isActive ? "active-app-section-link" : ""
          }
          id="app-section-link"
        >
          all Task
        </NavLink>
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive ? "active-app-section-link" : ""
          }
          id="app-section-link"
          end
        >
          today-task
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
