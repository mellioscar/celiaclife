// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { firebaseApi } from "../services/firebaseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firebaseApi.middleware),
});

setupListeners(store.dispatch);

export default store;
