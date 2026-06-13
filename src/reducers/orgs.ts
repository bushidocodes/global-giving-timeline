import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Org } from "../types";

interface OrgsState {
  data: Record<string, Org>;
  loading: boolean;
  error: string | null;
}

const initialState: OrgsState = { data: {}, loading: false, error: null };

export const loadOrgs = createAsyncThunk<Record<string, Org>>(
  "orgs/load",
  async () => {
    const { data } = await axios.get<Record<string, Org>>(
      `${import.meta.env.VITE_API_BASE_URL}/getorganizations`
    );
    return data;
  }
);

const orgsSlice = createSlice({
  name: "orgs",
  initialState,
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
  }
});

export default orgsSlice.reducer;
