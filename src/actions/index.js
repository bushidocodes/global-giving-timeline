import axios from "axios";
import { SET_TIMELINE } from "../reducers/timeline";
import { SET_ORGS } from "../reducers/orgs";
import { SELECT_ORG } from "../reducers/settings";

export function setTimeline(timeline) {
  return {
    type: SET_TIMELINE,
    payload: timeline
  };
}

export function setOrgs(orgs) {
  return {
    type: SET_ORGS,
    payload: orgs
  };
}

export function selectOrg(orgID) {
  return {
    type: SELECT_ORG,
    payload: orgID
  };
}

export const loadTimeline = () => (dispatch, getState) => {
  const { selectedOrg } = getState().settings;
  if (selectedOrg) {
    const base = process.env.REACT_APP_API_BASE_URL;
    return axios
      .get(`${base}/getorgbyposttest?orgId=${selectedOrg}`)
      .then(({ data }) => dispatch(setTimeline(data)))
      .catch((err) => console.error(err));
  } else {
    return null;
  }
};
