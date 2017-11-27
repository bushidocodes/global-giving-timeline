import { SET_TIMELINE } from "../reducers/timeline";

export function setTimeline(timeline) {
  return {
    type: SET_TIMELINE,
    timeline
  };
}
