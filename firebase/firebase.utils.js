// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
