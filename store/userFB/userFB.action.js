import { USER_FB_ACTION_TYPES } from "./userFB.types";
import { createAction } from "../reducer/reducer.utils";

export const setCurrentUserFB = (user) => {
  return createAction(USER_FB_ACTION_TYPES.SET_CURRENT_USER_FB, user);
};
