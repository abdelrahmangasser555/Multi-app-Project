import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import MainApps from "./pages/my-apps/mainApps.jsx";
import Courses from "./pages/my-apps/courses.jsx";
import MyTasksApp from "./pages/my-apps/myTasks.jsx";
import { loader as roadMapLoader } from "./pages/my-apps/courses.jsx";
import RecentTasks from "./components/recentTasks.jsx";
import TodayTaskPage, {
  loader as todayTaskLoader,
} from "./pages/my-apps/taskPages/todayTaskPage.jsx";

export default function Index() {
  // localStorage.removeItem("youtubeLinks");
  const routes = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="apps" element={<MainApps />}>
          <Route index element={<Courses />} loader={roadMapLoader} />
          <Route path="task" element={<MyTasksApp />}>
            <Route path="allTasks" element={<RecentTasks />} />
            <Route index element={<TodayTaskPage />} loader={todayTaskLoader} />
          </Route>
          <Route element={<h1>extra app </h1>} path="aiWebsite" />
        </Route>
        <Route path="/profile" element={<h1>hello my profile</h1>} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Index />);
