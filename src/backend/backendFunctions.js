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
