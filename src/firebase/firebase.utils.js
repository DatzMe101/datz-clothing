import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABT0wulKU6cAze9RryqXPCpq-9HpVXGqI",
  authDomain: "datz-clothing-db.firebaseapp.com",
  databaseURL: "https://datz-clothing-db.firebaseio.com",
  projectId: "datz-clothing-db",
  storageBucket: "",
  messagingSenderId: "57613792258",
  appId: "1:57613792258:web:bbc87b7d19346ffe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();
  if (userSnapshot.exists) return userRef;
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    });
  } catch (error) {
    console.log("There is an error in creating user", error.message);
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
