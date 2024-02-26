import React from "react";
import { NavLink } from "react-router-dom";
import "../pagesStyles/topNavigation.css";

export default function TopNavigationApps() {
  return (
    <nav className="top-navigation-apps">
      <ul className="top-navigation-apps-list">
        <NavLink
          to="/apps/task"
          className={({ isActive }) => (isActive ? "active-app" : "")}
          id="item-nav-apps"
        >
          Notes
        </NavLink>
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "active-app" : "")}
          id="item-nav-apps"
          end
        >
          Courses
        </NavLink>
        <NavLink
          to="aiWebsite"
          className={({ isActive }) => (isActive ? "active-app" : "")}
          id="item-nav-apps"
          end
        >
          ai website
        </NavLink>
      </ul>
    </nav>
  );
}
