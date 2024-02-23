import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "../../pagesStyles/courses.css";
import { extractYoutubeId } from "../../utilities/useFulFunc";

export default function Courses() {
  const [vedioIds, setVedioIds] = useState([]);
  const [vedioEnter, setVedioEnter] = useState("");

  useEffect(() => {
    console.log(vedioEnter);
  }, [vedioEnter]);

  function handleIdChange(e) {
    setVedioEnter(e.target.value);
  }

  function addVedio() {
    const myVedioId = extractYoutubeId(vedioEnter);
    setVedioIds((prevIds) => [...prevIds, myVedioId]);
    setVedioEnter(""); // Clear the input field
  }

  return (
    <div className="my-courses-container">
      <h1>
        My <span>Courses</span> Section
      </h1>
      <div className="my-youtube-vedios">
        {vedioIds.map((videoId) => (
          <Youtube
            key={videoId}
            videoId={videoId}
            className="one-youtube-vedio"
          />
        ))}
      </div>
      <button
        className="btn"
        onClick={() => {
          document.getElementById("add-id").showModal();
        }}
      >
        add new vedio
      </button>
      <dialog id="add-id" className="modal">
        <div className="modal-box">
          <h3 className="modal-title font-bold text-lg">Add New vedio</h3>
          <input
            className="id-input input"
            type="text"
            placeholder="input the link in here"
            name="youtube-link"
            onChange={handleIdChange}
            value={vedioEnter}
          />
          <button className="add-link-button btn" onClick={addVedio}>
            add link
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
