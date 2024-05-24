import {CREATE_VALIDATION, VALIDATION_BY_USER} from "../types";

const initialState = [];

const validationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_VALIDATION:
            return state;
        case VALIDATION_BY_USER:
            return action.payload;
        default:
            return state;
    }
};

export default validationReducer;
