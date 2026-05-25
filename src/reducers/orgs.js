export const SET_ORGS = "SET_ORGS";

const initialState = {};

export default function orgs(state = initialState, action) {
  switch (action.type) {
    case SET_ORGS:
      return action.payload;
    default:
      return state;
  }
}
