// Redux
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { selectCurrentUserFB } from "../store/userFB/userFB.selector";
import { setCurrentUser, setIsReload } from "../store/user/user.action";
import { setCurrentUserFB } from "../store/userFB/userFB.action";
// Firebase
import {
  getDataOfUser,
  onAuthStateChangedListener,
} from "../firebase/firebase.utils";
// Navigation
import NavigationApp from "./NavigationApp";
import NavigationAuth from "./NavigationAuth";

const NavigationController = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsReload(true));
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        dispatch(setCurrentUser(user.uid));
        getDataOfUser(user.uid).then((result) => {
          dispatch(setCurrentUserFB(result));
        });
      } else {
        dispatch(setCurrentUser(user));
      }
    });
    return unSubscribe;
  }, []);
  if (currentUser) {
    return <NavigationApp />;
  } else {
    return <NavigationAuth />;
  }
};

export default NavigationController;
