import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import orgsReducer, { loadOrgs } from "./orgs";
import type { Org } from "../types";

vi.mock("axios", () => ({ default: { get: vi.fn() } }));
const mockGet = axios.get as unknown as Mock;

const makeStore = () => configureStore({ reducer: { orgs: orgsReducer } });

const ORG: Org = {
  OrgId: "4497",
  Name: "Example Org",
  LogoUrl: "https://example.org/logo.png"
};

beforeEach(() => {
  mockGet.mockReset();
});

describe("orgs slice", () => {
  it("has the expected initial state", () => {
    expect(makeStore().getState().orgs).toEqual({
      data: {},
      loading: false,
      error: null
    });
  });

  it("loads organizations from the API on success", async () => {
    mockGet.mockResolvedValueOnce({ data: { "4497": ORG } });
    const store = makeStore();

    await store.dispatch(loadOrgs());

    expect(mockGet).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveBeenCalledWith(
      expect.stringContaining("/getorganizations")
    );
    const state = store.getState().orgs;
    expect(state.data).toEqual({ "4497": ORG });
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("records an error message when the request fails", async () => {
    mockGet.mockRejectedValueOnce(new Error("network down"));
    const store = makeStore();

    await store.dispatch(loadOrgs());

    const state = store.getState().orgs;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("network down");
    expect(state.data).toEqual({});
  });
});
