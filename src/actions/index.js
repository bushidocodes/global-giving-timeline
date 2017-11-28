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

export function selectOrgAndPoll(orgID) {
  return function(dispatch, getState, api) {
    const { selectedOrg } = getState().settings;
    if (window.pollingTimer) {
      window.clearInterval(window.pollingTimer);
      window.pollingTimer = "";
    }
    this.props.loadTimeline();
    window.pollingTimer = window.setInterval(
      () => this.props.loadTimeline(),
      5000
    );
  };
}

export const loadTimeline = () => (dispatch, getState) => {
  const { selectedOrg } = getState().settings;
  if (selectedOrg) {
    console.log(`Loading the timeline for ${selectedOrg}`);
    return axios
      .get(
        "https://r3t2ak8274.execute-api.us-west-1.amazonaws.com/Prod/getPosts"
      )
      .then(({ data }) => dispatch(setTimeline(data)))
      .catch(err => console.log(err));
  } else {
    console.log("No org is selected");
    return null;
  }
};
