import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import MainApps from "./pages/my-apps/mainApps.jsx";
import Courses from "./pages/my-apps/courses.jsx";
import MyTasksApp from "./pages/my-apps/myTasks.jsx";

export default function Index() {
  // localStorage.removeItem("youtubeLinks");
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="apps" element={<MainApps />}>
          <Route index element={<Courses />} />
          <Route path="task" element={<MyTasksApp />}>
            <Route index element={<h1>today's task qwdqwdqwd</h1>} />
            <Route path="allTasks" element={<h1>all tasks</h1>} />
          </Route>
          <Route element={<h1>extra app </h1>} path="aiWebsite" />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Index />);
