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

export async function addYoutubeLink(Link) {
  const user = await connectingToDatabase();
  const newId = await user.functions.addVedioLink(Link);
  return newId;
}
