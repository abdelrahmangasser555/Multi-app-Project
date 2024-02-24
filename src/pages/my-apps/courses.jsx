import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "../../pagesStyles/courses.css";
import { extractYoutubeId } from "../../utilities/useFulFunc";
import { getAllLinks, addYoutubeLink } from "../../backend/backendFunctions";

export default function Courses() {
  const [vedioIds, setVedioIds] = useState([]);
  const [vedioEnter, setVedioEnter] = useState("");

  useEffect(() => {
    const allLinks = getAllLinks();
    console.log(allLinks);
    setVedioIds(allLinks);
  }, []);
  function addVedio() {
    const myVedioId = extractYoutubeId(vedioEnter);
    console.log(myVedioId);
    addYoutubeLink(myVedioId);
    setVedioIds([...vedioIds, myVedioId]);
    setVedioEnter("");
  }
  function handleIdChange(e) {
    setVedioEnter(e.target.value);
  }

  return (
    <div className="my-courses-container">
      <h1>
        My <span>Courses</span> Section
      </h1>
      <div className="my-youtube-vedios">
        {vedioIds?.map((videoId, index) => (
          <Youtube
            key={index}
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
            onChange={(e) => handleIdChange(e)}
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
