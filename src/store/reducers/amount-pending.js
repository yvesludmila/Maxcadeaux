import { PENDING_AMOUNT } from "../types";

const initialState = 0;

const pendingAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_AMOUNT:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default pendingAmountReducer;
