import * as Realm from "realm-web";

export async function connectingToDatabase() {
  const app = new Realm.App({ id: "application-0-mfqkc" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
    console.log("Successfully logged in!", user.id);
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
}

export function addYoutubeLink(data) {
  const elementsInLocalStorage = localStorage.getItem("youtubeLinks");
  if (elementsInLocalStorage === null) {
    localStorage.setItem("youtubeLinks", JSON.stringify([data]));
  } else {
    const parsedElements = JSON.parse(elementsInLocalStorage);
    parsedElements.push(data);
    localStorage.setItem("youtubeLinks", JSON.stringify(parsedElements));
  }
}

export function getAllLinks() {
  const elementsInLocalStorage = localStorage.getItem("youtubeLinks");
  if (elementsInLocalStorage === null) {
    return [];
  } else {
    return JSON.parse(elementsInLocalStorage);
  }
}

export function deleteLink(index) {
  const elementsInLocalStorage = localStorage.getItem("youtubeLinks");
  if (elementsInLocalStorage === null) {
    return;
  } else {
    const parsedElements = JSON.parse(elementsInLocalStorage);
    parsedElements.splice(index, 1);
    localStorage.setItem("youtubeLinks", JSON.stringify(parsedElements));
  }
}

export function addNoteToVideo(note, videoIndex) {
  // add current date to the nore note is an object
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  note = { ...note, date: formattedDate };
  const elementsInLocalStorage = localStorage.getItem("youtubeLinks");
  if (elementsInLocalStorage === null) {
    return;
  } else {
    const parsedElements = JSON.parse(elementsInLocalStorage);
    parsedElements[videoIndex].notesNames.push(note);
    localStorage.setItem("youtubeLinks", JSON.stringify(parsedElements));
  }
}

export async function addTaskToDb(taskData) {
  const user = await connectingToDatabase();
  try {
    const addTask = await user.functions.addTask(taskData);
    console.log(addTask);
  } catch (err) {
    console.error("Failed to add task", err);
    // back up in local storage
    const elementsInLocalStorage = localStorage.getItem("tasks");
    if (elementsInLocalStorage === null) {
      localStorage.setItem("tasks", JSON.stringify([taskData]));
    } else {
      const parsedElements = JSON.parse(elementsInLocalStorage);
      parsedElements.push(taskData);
      localStorage.setItem("tasks", JSON.stringify(parsedElements));
    }
  }
}


// testing adding to database
const taskData = {
  today : "2021-09-01",
  tasks : [
    {
      taskName : "task 1",
      taskDescription : "task 1 description"
    },
    {
      taskName : "task 2",
      taskDescription : "task 2 description"
    }
  ]