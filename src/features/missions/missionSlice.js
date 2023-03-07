import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Get missions from API
export const getMission = createAsyncThunk("mission/getMission", async () => {
  const result = await axios("https://api.spacexdata.com/v3/missions");
  return result.data;
});

const initialState = {
  mission: [],
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMission.fulfilled, (state, action) => {
      state.mission = action.payload;
    });
  },
});
export default missionSlice.reducer;
