import logo from "../images/person.svg";

export default function LoadingTasks() {
  return (
    <div className="loading-tasks">
      <img src={logo} alt="loading" />
      <h2>
        Loading <span className="loading loading-dots loading-sm"></span>
      </h2>
    </div>
  );
}
