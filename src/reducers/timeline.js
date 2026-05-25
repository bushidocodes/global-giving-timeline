export const SET_TIMELINE = "SET_TIMELINE";

const initialState = [];

export default function timeline(state = initialState, action) {
  switch (action.type) {
    case SET_TIMELINE:
      return action.payload;
    default:
      return state;
  }
}
