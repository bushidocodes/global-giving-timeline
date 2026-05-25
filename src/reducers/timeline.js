import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadTimeline = createAsyncThunk(
  "timeline/load",
  async (_, { getState }) => {
    const { selectedOrg } = getState().settings;
    if (!selectedOrg) return [];
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/getorgbyposttest?orgId=${selectedOrg}`
    );
    return data;
  },
  // Skip if a fetch is already in flight.
  { condition: (_, { getState }) => !getState().timeline.loading }
);

const timelineSlice = createSlice({
  name: "timeline",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTimeline.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTimeline.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load timeline";
      });
  },
});

export default timelineSlice.reducer;
