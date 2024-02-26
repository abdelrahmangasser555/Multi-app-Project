import { useState } from "react";
import { generateRoadMap } from "../backend/aiTesting";

export default function GenerateRoadMap() {
  const [generatingState, setGeneratingState] = useState(false);
  async function roadMapGenerator() {
    setGeneratingState(true);
    try {
      const target = "web developer";
      const finishedCourses = ["html", "css", "javascript"];
      // put the finished corses in a string
      for (const course of finishedCourses) {
        const courses = finishedCourses.join(" ");
      }
      const job = "web developer advisor";
      const roadMap = await generateRoadMap(target, finishedCourses, job);
      localStorage.setItem("roadMap", JSON.stringify(roadMap));
      // setRoadMap(roadMap);
      console.log("generated road map", roadMap);
    } catch (error) {
      console.error("Error generating road map:", error);
    } finally {
      setGeneratingState(false);
    }
  }
  return (
    <dialog
      id="generate-road-map-dialog"
      className="display-notes-modal-container modal"
    >
      <div className="modal-box">
        <h3 className="display-note-modal-title modal-title font-bold text-lg">
          generate road map
        </h3>
        <button
          className="btn"
          onClick={roadMapGenerator}
          disabled={generatingState}
        >
          {generatingState ? "generating..." : "generate"}
        </button>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
