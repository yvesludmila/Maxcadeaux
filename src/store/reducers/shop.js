import { ALL_SHOP, AMOUNT_SHOP, SINGLE_SHOP } from "../types";

const initialState = {
  all: [],
  single: null,
  amount: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_SHOP:
      return { ...state, all: action.payload };
    case SINGLE_SHOP:
      return { ...state, single: action.payload };
    case AMOUNT_SHOP:
      return { ...state, amount: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
