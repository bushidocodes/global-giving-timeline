import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  selectedOrg: string | null;
}

const initialState: SettingsState = { selectedOrg: null };

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    selectOrg: (state, action: PayloadAction<string>) => {
      state.selectedOrg = action.payload;
    },
  },
});

export const { selectOrg } = settingsSlice.actions;
export default settingsSlice.reducer;
