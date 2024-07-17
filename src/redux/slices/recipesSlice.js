// src/redux/slices/recipesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para el slice de recetas
const initialState = {
  recipes: [],
};

// Crear el slice de recetas con las acciones y reducers correspondientes
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, action) {
      state.recipes = action.payload;
    },
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
  },
});

// Exportar las acciones y el reducer del slice de recetas
export const { setRecipes, addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
