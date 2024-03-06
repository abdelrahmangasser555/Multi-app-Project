import logo from "../images/person.svg";

export default function LoadingTasks() {
  return (
    <div className="loading-tasks">
      <h2 className="loading">
        Loading <span className="loading loading-dots loading-sm"></span>
      </h2>
    </div>
  );
}
