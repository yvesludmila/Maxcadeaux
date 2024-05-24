import axios from "axios";

import { ALL_SHOP, AMOUNT_SHOP, SINGLE_SHOP } from "../types";

export const getAllShop = () => async (dispatch) => {
  const response = await axios.get(`/api/shop/shop?all=1`);
  try {
    dispatch({
      type: ALL_SHOP,
      payload: response.data ? response.data : [],
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};

export const singleShop = (id) => async (dispatch) => {
  const response = await axios.get(`/api/shop/shop?single=${id}`);
  try {
    dispatch({
      type: SINGLE_SHOP,
      payload: response.data ? response.data : [],
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};

export const amountShop = (shopId) => async (dispatch) => {
  const response = await axios.get(`/api/shop/shop?shop=${shopId}`);
  try {
    dispatch({
      type: AMOUNT_SHOP,
      payload: response.data ? response.data : [],
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: "error message",
    });
  }
};
