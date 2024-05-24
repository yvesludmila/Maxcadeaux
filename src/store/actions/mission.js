import axios from "axios";
import {ACTIVE_MISSION} from "../types";

export const getActiveMission = () => async (dispatch) => {
    const response = await axios.get(`/api/missions/active`);
    try {
        dispatch({
            type: ACTIVE_MISSION,
            payload: response.data.request ? response.data.request : [],
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};
