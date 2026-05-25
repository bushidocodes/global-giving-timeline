import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TimelinePost } from "../types";

interface TimelineState {
  items: TimelinePost[];
  loading: boolean;
  error: string | null;
}

// Minimal slice of RootState needed here; avoids a circular import with store.ts.
interface ThunkState {
  settings: { selectedOrg: string | null };
  timeline: { loading: boolean };
}

const initialState: TimelineState = { items: [], loading: false, error: null };

export const loadTimeline = createAsyncThunk<
  TimelinePost[],
  void,
  { state: ThunkState }
>(
  "timeline/load",
  async (_, { getState }) => {
    const { selectedOrg } = getState().settings;
    if (!selectedOrg) return [];
    const { data } = await axios.get<TimelinePost[]>(
      `${import.meta.env.VITE_API_BASE_URL}/getorgbyposttest?orgId=${selectedOrg}`
    );
    return data;
  },
  // Skip if a fetch is already in flight.
  { condition: (_, { getState }) => !getState().timeline.loading }
);

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
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
