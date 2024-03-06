import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "../../pagesStyles/courses.css";
import {
  extractYoutubeId,
  convertToReadableDate,
  convertToReadableDateNotLong,
} from "../../utilities/useFulFunc";
import {
  getAllLinks,
  addYoutubeLink,
  deleteLink,
  addNoteToVideo,
} from "../../backend/backendFunctions";
import { useNavigation, useLoaderData } from "react-router-dom";
import NotesDialog from "../../components/notesDialog";
import DisplayNotesDialog from "../../components/displayNotesDialog";
import GenerateRoadMap from "../../components/generateRoadMap";
import RoadMap from "../../components/roadMap";
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
  // const [roadMap, setRoadMap] = useState(null);
  const [vedioEnter, setVedioEnter] = useState({
    vedioId: "",
    title: "",
    description: "",
    notesNames: [],
  });

  const data = useLoaderData();

  // creating a state for the data
  const [roadMap, setRoadMap] = useState(data?.steps ? data?.steps : null);

  useEffect(() => {
    const allLinks = getAllLinks();
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
    setVedioObjects((prevVedios) => [newVedio, ...prevVedios]);
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
      <div className="buttom-bottoms">
        <button
          className="btn"
          onClick={() => {
            document.getElementById("add-id").showModal();
          }}
        >
          add new course
        </button>
        <button
          className="generate-road-map btn btn-outline btn-warning"
          onClick={() => {
            document.getElementById("generate-road-map-dialog").showModal();
          }}
        >
          add a roadMap
        </button>
      </div>
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
              <p className="vedio-object-description">
                {videoObject.description}
              </p>
              <button
                className="add-note-button btn"
                onClick={() => {
                  // pass the key to notes dialog

                  document
                    .getElementById(`notes-dialog-id-${index}`)
                    .showModal();
                }}
              >
                add note
              </button>
              <NotesDialog index={index} setVedioObjects={setVedioObjects} />
              <div className="youtube-notes-div">
                {videoObject.notesNames.map((note, noteIndex) => (
                  <button
                    key={noteIndex}
                    className="notes-p"
                    onClick={() => {
                      document
                        .getElementById(
                          `display-notes-dialog-${index}-${noteIndex}`
                        )
                        .showModal();
                    }}
                  >
                    {note.title}
                    <p className="hovered-date">
                      {convertToReadableDateNotLong(note.date)}
                    </p>
                    <DisplayNotesDialog
                      title={note.title}
                      content={note.content}
                      date={convertToReadableDate(note.date)}
                      code={note.code ? note.code : null}
                      index={index}
                      noteIndex={noteIndex}
                    />
                  </button>
                ))}
              </div>
              <button className="edit-button btn">edit</button>
              <button
                className="delete-button btn btn-outline "
                onClick={() => {
                  deleteLink(index);
                  setVedioObjects((prevVedios) =>
                    prevVedios.filter((vedio, i) => i !== index)
                  );
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {roadMap !== null ? (
        <RoadMap steps={roadMap} />
      ) : (
        <h1> no road maps created yet !</h1>
      )}

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
            // when pressing enter it will add the link
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addVedio();
              }
            }}
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
      <GenerateRoadMap setRoadMap={setRoadMap} />
    </div>
  );
}

export function loader() {
  const roadMap = JSON.parse(localStorage.getItem("roadMap")) || null;
  return roadMap;
}
