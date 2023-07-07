// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_oA9OmEjJdCvnwA1PJXSJlSTQfegbM8",
  authDomain: "ski-journal-f22e4.firebaseapp.com",
  projectId: "ski-journal-f22e4",
  storageBucket: "ski-journal-f22e4.appspot.com",
  messagingSenderId: "649948095672",
  appId: "1:649948095672:web:2c9e16564b8e8c1873804d",
  measurementId: "G-D96TFD44K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth();
// Firestore
const db = getFirestore(app);
// Storage
const storage = getStorage();

export const createUserAuthAndDoc = async (email, password, data) => {
  console.log(email, password);
  console.log(auth);
  console.log(data);
  const { name, lastName, username } = data;
  console.log(name, lastName, username);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      try {
        await setDoc(userDocRef, {
          email: email,
          userID: user.uid,
          name: name,
          lastName: lastName,
          username: username,
        });
        console.log("Creted User Doc!");
      } catch (error) {
        console.log("error creating user");
      }
    }
    return userDocRef;
  } catch (error) {
    console.log(error);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
};

export const uploadFormDataToUserFB = async (uid, formData, userID, file) => {
  const userDocRef = doc(db, "users", uid);
  const journalId = uuidv4();
  const journalDocRef = doc(db, "journals", journalId);
  const querySnapshot = await getDoc(userDocRef);
  const {
    discipline,
    courseTurns,
    totalRuns,
    place,
    date,
    sensations,
    snowConditions,
    photoId,
    username,
  } = formData;
  console.log(username);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const year = date.getFullYear();
  const todayFormatted = `${day}-${month}-${year}`;
  let dateForCalendar;
  if (day < 10 && month < 10) {
    dateForCalendar = `${year}-0${month}-0${day}`;
  } else if (day < 10) {
    dateForCalendar = `${year}-${month}-0${day}`;
  } else if (month < 10) {
    dateForCalendar = `${year}-0${month}-${day}`;
  } else {
    dateForCalendar = `${year}-${month}-${day}`;
  }
  // Pedir dailyData actual
  let { dailyData } = querySnapshot.data();
  if (!dailyData) {
    dailyData = [];
  }
  dailyData.push({
    discipline,
    courseTurns,
    totalRuns,
    place,
    date,
    sensations,
    snowConditions,
    journalId,
    photoId,
    username,
    dateForCalendar,
    uid,
  });

  try {
    await updateDoc(userDocRef, {
      dailyData: dailyData,
    });
    await setDoc(journalDocRef, {
      discipline,
      courseTurns,
      totalRuns,
      place,
      date,
      sensations,
      snowConditions,
      journalId,
      photoId,
      username,
      uid,
    });
    await uploadPhotoFeedToFBS(userID, photoId, file);
  } catch (error) {
    console.log("Error updating form", error.message);
  }
};

const uploadPhotoFeedToFBS = async (idUser, idPhoto, file) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", file, true);
    xhr.send(null);
  });

  const photoFeedRef = ref(storage, `files/dailyphoto/${idPhoto}`);
  // const snapshot = ref.put(blob)

  // const uploadUri = Platform.OS === "ios" ? file.replace("file://", "") : file;
  await uploadBytes(photoFeedRef, blob);

  console.log("foto subida al storage");
};

export const uploadProfilePicToFBSAndUpdateUserDocFB = async (uid, file) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", file, true);
    xhr.send(null);
  });
  const profilePicRef = ref(storage, `files/profilepic/${uid}`);
  let isUploaded = false;
  try {
    await uploadBytes(profilePicRef, blob);
    isUploaded = true;
  } catch (err) {
    console.log(err);
  }
  if (isUploaded) {
    const userDocRef = doc(db, "users", uid);
    const hasProfilePic = true;
    try {
      await updateDoc(userDocRef, {
        hasProfilePic: hasProfilePic,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const getProfilePicUrl = async (uid) => {
  const storageRefProfilePic = ref(storage, `files//profilepic/${uid}`);
  const url = await getDownloadURL(storageRefProfilePic);
  return url;
};

export const getAllJournals = async () => {
  const allJournalsArray = [];
  const q = query(collection(db, "journals"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((journal) => {
    allJournalsArray.push(journal.data());
  });
  return allJournalsArray;
};

export const getAllProfilePicFB = async (uid) => {
  const storageRefCover = ref(storage, `files/profilepic`);
  const todosImagenes = await list(storageRefCover);
  return todosImagenes.items;
};

export const getAllJournalsPhotosFB = async (userId, photoId) => {
  const storageRefCover = ref(storage, `files/dailyphoto`);
  const todosImagenes = await list(storageRefCover);
  console.log(todosImagenes);
  return todosImagenes.items;
};

export const getDataOfUser = async (userID) => {
  const userDocRef = doc(db, "users", userID);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.data();
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
// ...
