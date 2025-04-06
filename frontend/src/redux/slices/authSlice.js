import { createSlice } from '@reduxjs/toolkit';

// Check if we have a user in localStorage on initial load
const storedUser = localStorage.getItem('user');
const storedAuth = localStorage.getItem('isAuthenticated');

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: storedAuth === 'true',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthState: (state) => {
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
      
      // Store authentication data in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isAuthenticated', 'true');
      
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
      
      // Clear authentication data from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('token');
    },
  },
});

export const { getAuthState, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
