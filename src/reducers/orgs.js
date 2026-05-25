import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadOrgs = createAsyncThunk("orgs/load", async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/getorganizations`
  );
  return data;
});

const orgsSlice = createSlice({
  name: "orgs",
  initialState: { data: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOrgs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadOrgs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadOrgs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load organizations";
      });
  },
});

export default orgsSlice.reducer;
