import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { connectingToDatabase } from "./backend/backendFunctions";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <div className="my-nav-bar navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">dev-mode</a>
        </div>
        <div className="cenetral-main-nav-bar navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) => {
                  isActive ? "active" : "";
                }}
              >
                <summary>my-apps</summary>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  isActive ? "active" : "";
                }}
              >
                <a>my-profile</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
