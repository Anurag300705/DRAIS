import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import disasterReducer from './slices/disasterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    disasters: disasterReducer,
  },
});