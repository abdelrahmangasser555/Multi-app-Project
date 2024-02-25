import React from "react";
import { NavLink } from "react-router-dom";
import "../pagesStyles/topNavigation.css";

export default function TopNavigationApps() {
  return (
    <nav className="top-navigation-apps">
      <ul className="top-navigation-apps-list">
        <NavLink
          to="/apps"
          end
          className={({ isActive }) => (isActive ? "active-app" : "")}
          id="item-nav-apps"
        >
          Notes
        </NavLink>
        <NavLink
          to="/apps/courses"
          className={({ isActive }) => (isActive ? "active-app" : "")}
          id="item-nav-apps"
        >
          Courses
        </NavLink>
      </ul>
    </nav>
  );
}
