import { ALL_USER } from "../types";

const initialState = [];

const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USER:
      return action.payload;
    default:
      return state;
  }
};

export default allUserReducer;
