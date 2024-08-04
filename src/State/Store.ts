import { configureStore } from "@reduxjs/toolkit";
import ListProductReducer from "./ListProductSlice/ListProductSlice";
export const store = configureStore({
  reducer: {
    products: ListProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
