import {
    COUPON_ADD,
    COUPON_DELETE,
    COUPON_LIST,
    COUPON_LIST_ACTIF,
    COUPON_UPDATE,
} from "../types";

const initialState = [];

const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUPON_LIST:
            return action.payload;

        case COUPON_LIST_ACTIF:
            return action.payload;

        case COUPON_DELETE:
            const deleted = state.filter((s) => s.id !== action.payload);
            return deleted;

        case COUPON_UPDATE:
            const idx = state.findIndex((s) => s.id === action.payload.id);
            if (idx !== -1) {
                state[idx] = action.payload.coupon;
                return state;
            }
            return state;

        case COUPON_ADD:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default couponReducer;
