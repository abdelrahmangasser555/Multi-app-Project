import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "../../pagesStyles/courses.css";
import { extractYoutubeId } from "../../utilities/useFulFunc";
import { getAllLinks, addYoutubeLink } from "../../backend/backendFunctions";
import { useNavigation } from "react-router-dom";

export default function Courses() {
  window.postMessage(
    {
      action: "NAVIGATE",
      payload: {
        to: "/apps/courses",
      },
    },
    "http://localhost:5173"
  );
  const [vedioObjects, setVedioObjects] = useState([]);
  const [vedioEnter, setVedioEnter] = useState({
    vedioId: "",
    title: "",
    description: "",
    notesNames: [],
  });

  useEffect(() => {
    const allLinks = getAllLinks();
    console.log(allLinks);
    setVedioObjects(allLinks);
  }, []);
  function addVedio() {
    const myVedioId = extractYoutubeId(vedioEnter.vedioId);

    // Create a new object with the updated video details
    const newVedio = {
      vedioId: myVedioId,
      title: vedioEnter.title,
      description: vedioEnter.description,
      notesNames: [], // Assuming you have a property named notesNames
    };
    // Add the new video to the local storage
    addYoutubeLink(newVedio);
    // Update the vedioObjects state with the new video
    setVedioObjects((prevVedios) => [...prevVedios, newVedio]);
    // Clear the input fields
    setVedioEnter({
      vedioId: "",
      title: "",
      description: "",
      notesNames: [],
    });
  }
  function handleIdChange(e) {
    const { name, value } = e.target;
    setVedioEnter({ ...vedioEnter, [name]: value });
  }

  return (
    <div className="my-courses-container">
      <h1 className="courses-title">
        My <span>Courses</span> Section
      </h1>
      <div className="my-youtube-vedios">
        {vedioObjects?.map((videoObject, index) => (
          <div
            key={index}
            className="my-one-vedio-container  bg-base-200 shadow-xl"
          >
            <Youtube
              key={index}
              videoId={videoObject.vedioId} // Corrected to access the videoId property
              className="one-youtube-vedio"
            />
            <div className="right-side-youtube-container">
              <h1 className="header-one-youtube-vedio">{videoObject.title}</h1>
              <p>{videoObject.description}</p>
            </div>
          </div>
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
            name="vedioId"
            onChange={(e) => handleIdChange(e)}
            value={vedioEnter.vedioId}
          />
          <input
            className="id-input input"
            type="text"
            placeholder="input the title in here"
            name="title"
            onChange={(e) => handleIdChange(e)}
            value={vedioEnter.title}
          />
          <textarea
            className="text-area-input textarea textarea-bordered textarea-lg w-full max-w-xs"
            type="text"
            placeholder="input the description in here"
            name="description"
            onChange={(e) => handleIdChange(e)}
            value={vedioEnter.description}
          />
          <button
            className="add-link-button btn btn-outline btn-accent"
            onClick={addVedio}
          >
            add Course
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
