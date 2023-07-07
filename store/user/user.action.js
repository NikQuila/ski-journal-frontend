import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../reducer/reducer.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const setIsReload = (user) => {
  return createAction(USER_ACTION_TYPES.SET_IS_RELOAD, user);
};
