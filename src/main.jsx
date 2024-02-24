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
import Courses from "./pages/my-apps/courses.jsx";

export default function Index() {
  // localStorage.removeItem("youtubeLinks");
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="apps" element={<Courses />}>
          <Route index element={<h1>notes app goes here</h1>} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Index />);
