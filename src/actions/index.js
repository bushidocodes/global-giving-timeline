import axios from "axios";
import { setTimeline } from "../reducers/timeline";

// Re-export slice actions so existing component imports don't change.
export { selectOrg } from "../reducers/settings";
export { setOrgs } from "../reducers/orgs";
export { setTimeline } from "../reducers/timeline";

export const loadTimeline = () => (dispatch, getState) => {
  const { selectedOrg } = getState().settings;
  if (selectedOrg) {
    const base = import.meta.env.VITE_API_BASE_URL;
    return axios
      .get(`${base}/getorgbyposttest?orgId=${selectedOrg}`)
      .then(({ data }) => dispatch(setTimeline(data)))
      .catch((err) => console.error(err));
  }
  return null;
};
