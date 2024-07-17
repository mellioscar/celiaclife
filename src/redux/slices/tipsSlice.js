// src/redux/slices/tipsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para el slice de consejos
const initialState = {
  tips: [],
};

// Crear el slice de consejos con las acciones y reducers correspondientes
const tipsSlice = createSlice({
  name: 'tips',
  initialState,
  reducers: {
    setTips(state, action) {
      state.tips = action.payload;
    },
    addTip(state, action) {
      state.tips.push(action.payload);
    },
  },
});

// Exportar las acciones y el reducer del slice de consejos
export const { setTips, addTip } = tipsSlice.actions;
export default tipsSlice.reducer;
