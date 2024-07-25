// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'; // Asegúrate de que la ruta es correcta
import tipsReducer from './slices/tipsSlice'; // Asegúrate de que la ruta es correcta
import recipesReducer from './slices/recipesSlice'; // Asegúrate de que la ruta es correcta
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
