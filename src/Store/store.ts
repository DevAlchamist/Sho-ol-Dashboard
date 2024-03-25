// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
