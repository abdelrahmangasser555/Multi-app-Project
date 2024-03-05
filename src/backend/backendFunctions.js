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
    // insert the link at the beginning of the array
    parsedElements.unshift(data);
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
  // the index you are given is from the end of the array not the beginning
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
    parsedElements[videoIndex].notesNames.unshift(note);
    localStorage.setItem("youtubeLinks", JSON.stringify(parsedElements));
  }
}

export async function addTaskToDb(taskData) {
  const user = await connectingToDatabase();
  try {
    const addTask = await user.functions.addTaskToDay(taskData);
    return "task added successfully";
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
    return "data is backed up in local storage";
  }
}

export async function getTodayTasks() {
  const user = await connectingToDatabase();
  try {
    const task = await user.functions.getTodayTasks();
    return task;
  } catch (err) {
    console.error(err, "an error ocurred gettiing today's task");
    return "an error occured getting today's data";
  }
}

// testing adding to database
