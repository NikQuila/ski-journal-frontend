// Redux
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import { userReducer } from "./user/user.reducer";
import { userFBReducer } from "./userFB/userFB.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userFB: userFBReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
