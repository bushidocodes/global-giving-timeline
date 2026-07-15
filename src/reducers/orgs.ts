import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Org } from "../types";
import { getJSON } from "../utils/api";

interface OrgsState {
  data: Record<string, Org>;
  loading: boolean;
  error: string | null;
}

const initialState: OrgsState = { data: {}, loading: false, error: null };

export const loadOrgs = createAsyncThunk<Record<string, Org>>(
  "orgs/load",
  async () => {
    return getJSON<Record<string, Org>>(
      `${import.meta.env.VITE_API_BASE_URL}/getorganizations`
    );
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
