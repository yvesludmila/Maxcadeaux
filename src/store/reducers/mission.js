import {ACTIVE_MISSION} from "../types";

const initialState = [];

const missionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_MISSION:
            return action.payload;
        default:
            return state;
    }
};

export default missionReducer;
