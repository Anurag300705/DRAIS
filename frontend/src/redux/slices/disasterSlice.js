import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  alerts: [],
  recentEvents: [
    {
      id: 1,
      type: 'Earthquake',
      location: 'San Francisco, CA',
      time: '2 hours ago',
      magnitude: 5.2
    },
    {
      id: 2,
      type: 'Wildfire',
      location: 'Los Angeles, CA',
      time: '5 hours ago',
      area: '250 acres'
    }
  ],
  loading: false,
  error: null
};

const disasterSlice = createSlice({
  name: 'disasters',
  initialState,
  reducers: {
    fetchDisastersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDisastersSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchDisastersFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addAlert(state, action) {
      state.alerts.push(action.payload);
    }
  }
});

export const {
  fetchDisastersStart,
  fetchDisastersSuccess,
  fetchDisastersFailure,
  addAlert
} = disasterSlice.actions;

export default disasterSlice.reducer;