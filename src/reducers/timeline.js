import { createSlice } from "@reduxjs/toolkit";

const timelineSlice = createSlice({
  name: "timeline",
  initialState: [],
  reducers: {
    setTimeline: (state, action) => action.payload,
  },
});

export const { setTimeline } = timelineSlice.actions;
export default timelineSlice.reducer;
