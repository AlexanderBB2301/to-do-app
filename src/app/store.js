import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/tasksSlice";

const store = configureStore({
  reducer: reducer,
});
export default store;
