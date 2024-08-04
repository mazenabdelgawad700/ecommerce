import { configureStore } from "@reduxjs/toolkit";
import ListProductReducer from "./ListProductSlice/ListProductSlice";
import ListProductsInCartReducer from "./CartSlice/CartSlice";
export const store = configureStore({
  reducer: {
    products: ListProductReducer,
    cartProducts: ListProductsInCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
