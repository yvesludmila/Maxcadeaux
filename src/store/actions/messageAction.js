import axios from "axios";
import config from "../../utils/config";
import {ALL_MESSAGES, NEW_MESSAGE} from "../types";

export const getAllMessage = () => async (dispatch) => {
    const response = await axios.get(`/api/user/message`);
    console.log(response);
    try {
        dispatch({
            type: ALL_MESSAGES,
            payload: response.data ? response.data.message : [],
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const newMessageAction = (newMessage) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_MESSAGE,
            payload: newMessage,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};
