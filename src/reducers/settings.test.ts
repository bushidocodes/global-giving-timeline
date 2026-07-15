import { describe, expect, it } from "vitest";
import settingsReducer, { selectOrg } from "./settings";

describe("settings slice", () => {
  it("starts with no organization selected", () => {
    expect(settingsReducer(undefined, { type: "@@INIT" })).toEqual({
      selectedOrg: null
    });
  });

  it("selectOrg sets the selected organization", () => {
    const next = settingsReducer(undefined, selectOrg("4497"));
    expect(next.selectedOrg).toBe("4497");
  });

  it("selectOrg replaces a previous selection", () => {
    const next = settingsReducer({ selectedOrg: "1" }, selectOrg("2"));
    expect(next.selectedOrg).toBe("2");
  });
});
