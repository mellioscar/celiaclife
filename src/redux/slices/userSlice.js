// src/redux/slices/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
      imageCamera: null,
    },
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.value.user = payload.email;
      state.value.token = payload.idToken;
      state.value.localId = payload.localId;
    },
    clearUser: (state) => {
      state.value.user = null;
      state.value.token = null;
      state.value.localId = null;
      state.value.imageCamera = null;
    },
    setCameraImage: (state, { payload }) => {
      state.value.imageCamera = payload;
    },
  },
});

export const { setUser, clearUser, setCameraImage } = userSlice.actions;
export default userSlice.reducer;
