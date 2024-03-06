import TopNavigationApps from "../../components/topNavigationApps";
import { Outlet } from "react-router-dom";

export default function MainApps() {
  return (
    <div className="main-apps-container" id="main-app-container">
      <TopNavigationApps />
      <Outlet />
    </div>
  );
}
