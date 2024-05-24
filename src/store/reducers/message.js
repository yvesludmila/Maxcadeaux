import {ALL_MESSAGES, NEW_MESSAGE} from "../types";

const initialState = [];

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_MESSAGES:
            return action.payload;
        case NEW_MESSAGE:
            if (
                !state.find(
                    (msg) =>
                        msg.idUser === action.payload.idUser &&
                        new Date(msg.date).getTime() ===
                        new Date(action.payload.date).getTime() &&
                        msg.message === action.payload.message
                )
            )
                return [...state, action.payload];
        default:
            return state;
    }
};

export default messageReducer;
