import { createSlice } from "@reduxjs/toolkit";

const orgsSlice = createSlice({
  name: "orgs",
  initialState: {},
  reducers: {
    setOrgs: (state, action) => action.payload,
  },
});

export const { setOrgs } = orgsSlice.actions;
export default orgsSlice.reducer;
