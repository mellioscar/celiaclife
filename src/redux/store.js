// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tipsReducer from './slices/tipsSlice';
import recipesReducer from './slices/recipesSlice';

// Configurar la tienda de Redux con los reducers correspondientes
const store = configureStore({
  reducer: {
    user: userReducer,
    tips: tipsReducer,
    recipes: recipesReducer,
  },
});

export default store;
