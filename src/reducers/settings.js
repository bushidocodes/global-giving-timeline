export const SELECT_ORG = "SELECT_ORG";

const initialState = {
  selectedOrg: null
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SELECT_ORG:
      return { ...initialState, selectedOrg: action.payload };
    default:
      return state;
  }
}
