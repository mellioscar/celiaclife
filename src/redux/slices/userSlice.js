// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para el slice de usuario
const initialState = {
  name: '',
  birthdate: '',
  email: '',
  photo: '',
};

// Crear el slice de usuario con las acciones y reducers correspondientes
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.birthdate = action.payload.birthdate;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
  },
});

// Exportar las acciones y el reducer del slice de usuario
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
