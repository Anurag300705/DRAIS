import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Remove printState - use Redux DevTools instead
    getAuthState: (state) => {
      // Just return the current state without modification
      // Redux Toolkit will handle the state management
      // console.log('Current state 1:', state.user);
      return state.user;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      console.log('Current state 2:', state.user);
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

// Remove printState from exports
export const { getAuthState, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;