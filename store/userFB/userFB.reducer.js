import { USER_FB_ACTION_TYPES } from "./userFB.types";

const INITIAL_STATE = {
  currentUserFB: null,
};

// eslint-disable-next-line default-param-last
export const userFBReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  // Esto se va a activar siempre q se cambie el state, y cuando no sea currentUser, este devuelvo lo q ya tenía
  switch (type) {
    case USER_FB_ACTION_TYPES.SET_CURRENT_USER_FB:
      return { ...state, currentUserFB: payload };
    default:
      return state;
  }
};
