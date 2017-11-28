export const SET_ORGS = "SET_ORGS";

const mockData = {
  "4497": {
    name: "Step for Bulgaria",
    logoURL: "https://www.globalgiving.org/pfil/organ/4497/orglogo.jpg"
  },
  "372": {
    name: "Afghan Institute of Learning",
    logoURL: "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg"
  }
};
const initialState = {};

export default function orgs(state = initialState, action) {
  switch (action.type) {
    case SET_ORGS:
      return action.payload;
    default:
      return state;
  }
}
