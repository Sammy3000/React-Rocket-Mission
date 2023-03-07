/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Get missions from API
export const getMission = createAsyncThunk('mission/getMission', async () => {
  const result = await axios('https://api.spacexdata.com/v3/missions');
  return result.data;
});

const initialState = {
  mission: [],
  status: 'idle',
  error: null,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missions = state.mission.find(
        (result) => result.mission_id === action.payload,
      );
      missions.reserved = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMission.fulfilled, (state, action) => {
        state.mission = action.payload;
        state.status = 'succeded';
      })
      .addCase(getMission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
const reservedMissions = (state) => state.missions.missions.filter((results) => results.reserved);
export { reservedMissions };
export default missionSlice.reducer;
