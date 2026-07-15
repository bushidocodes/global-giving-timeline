import { configureStore } from "@reduxjs/toolkit";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TimelinePost } from "../types";
import settingsReducer, { selectOrg } from "./settings";
import timelineReducer, { loadTimeline } from "./timeline";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

interface TestState {
  settings: { selectedOrg: string | null };
  timeline: { items: TimelinePost[]; loading: boolean; error: string | null };
}

const makeStore = (preloadedState?: Partial<TestState>) =>
  configureStore({
    reducer: { settings: settingsReducer, timeline: timelineReducer },
    preloadedState: preloadedState as TestState | undefined
  });

const POST: TimelinePost = {
  Timestamp: 1,
  OrgId: "4497",
  UserId: "user-1",
  ContentType: "text",
  ContentData: "Hello"
};

beforeEach(() => {
  mockFetch.mockReset();
});

describe("timeline slice", () => {
  it("has the expected initial state", () => {
    expect(makeStore().getState().timeline).toEqual({
      items: [],
      loading: false,
      error: null
    });
  });

  it("returns an empty timeline without calling the API when no org is selected", async () => {
    const store = makeStore();

    await store.dispatch(loadTimeline());

    expect(mockFetch).not.toHaveBeenCalled();
    expect(store.getState().timeline.items).toEqual([]);
    expect(store.getState().timeline.loading).toBe(false);
  });

  it("loads posts for the selected org and requests the correct URL", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([POST])
    });
    const store = makeStore();
    store.dispatch(selectOrg("4497"));

    await store.dispatch(loadTimeline());

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("/getorgbyposttest?orgId=4497")
    );
    const state = store.getState().timeline;
    expect(state.items).toEqual([POST]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("records an error message when the request fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network down"));
    const store = makeStore();
    store.dispatch(selectOrg("4497"));

    await store.dispatch(loadTimeline());

    const state = store.getState().timeline;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("network down");
    expect(state.items).toEqual([]);
  });

  it("skips the fetch when one is already in flight (condition guard)", async () => {
    const store = makeStore({
      settings: { selectedOrg: "4497" },
      timeline: { items: [], loading: true, error: null }
    });

    const result = await store.dispatch(loadTimeline());

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    // The guard short-circuits before `pending`, so loading is untouched.
    expect(store.getState().timeline.loading).toBe(true);
  });
});
