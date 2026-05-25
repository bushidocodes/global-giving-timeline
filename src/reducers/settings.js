import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: { selectedOrg: null },
  reducers: {
    selectOrg: (state, action) => {
      state.selectedOrg = action.payload;
    },
  },
});

export const { selectOrg } = settingsSlice.actions;
export default settingsSlice.reducer;
