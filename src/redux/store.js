// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tipsReducer from './slices/tipsSlice';
import recipesReducer from './slices/recipesSlice';
import { firebaseApi } from '../services/firebaseApi';

// Configurar la tienda de Redux con los reducers y middleware correspondientes
const store = configureStore({
  reducer: {
    user: userReducer,
    tips: tipsReducer,
    recipes: recipesReducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

export default store;
