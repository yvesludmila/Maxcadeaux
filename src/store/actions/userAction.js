import axios from "axios";

// import config from "../../utils/config";
import {
  ALL_USER,
  LOGOUT_USER,
  USER_AUTH,
  // USER_DATA,
  USER_ERROR,
} from "../types";

export const getUserAuth = () => async (dispatch) => {
  const response = localStorage.getItem("token")
    ? await axios.post(`api/auth/verify`, {
        token: localStorage.getItem("token"),
      })
    : {
        data: {
          verified: false,
        },
      };
  try {
    dispatch({
      type: USER_AUTH,
      payload: {
        verified: response.data.verified ? response.data.verified : false,
        user: response.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  const response = await axios.get(`/api/user/all`);
  try {
    dispatch({
      type: ALL_USER,
      payload: response.data ? response.data.all : [],
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  try {
    dispatch({
      type: LOGOUT_USER,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};
