import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuth: false, username: '', access: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.username = action.payload.username;
      state.access = action.payload.access;
    },
    logout(state) {
      state.isAuth = false;
      state.username = '';
      state.access = '';
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;