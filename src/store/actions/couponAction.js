import axios from "axios";
import {
    COUPON_ADD,
    COUPON_DELETE,
    COUPON_LIST,
    COUPON_LIST_ACTIF,
    COUPON_UPDATE,
    USER_ERROR,
} from "../types";

export const getAllCoupon = () => async (dispatch) => {
    const response = await axios.get(`/api/coupon/coupon`);
    try {
        dispatch({
            type: COUPON_LIST,
            payload: response.data ? response.data : [],
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const getAllCouponActif = () => async (dispatch) => {
    try {
        const response = await axios.get(`/api/coupon/couponactif`);
        dispatch({
            type: COUPON_LIST_ACTIF,
            payload: response.data ? response.data : [],
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const getCouponById = (id) => async (dispatch) => {
    const response = await axios.get(`/api/coupon/coupon/${id}`);
    try {
        dispatch({
            type: COUPON_LIST,
            payload: response.data ? response.data : [],
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const newCoupon = (newCoupon) => async (dispatch) => {
    console.log('NEW COUPONE', newCoupon);
    try {
        await axios.post(`/api/coupon/coupon`, {
            ...newCoupon,
        });
        dispatch({
            type: COUPON_ADD,
            payload: newCoupon,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const updateCoupon = (updated, id) => async (dispatch) => {
    try {
        await axios.put(`/api/coupon/coupon?id=${id}`, {
            ...updated,
        });
        dispatch({
            type: COUPON_UPDATE,
            payload: {
                coupon: updated,
                id: id,
            },
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};

export const deleteCoupon = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/coupon/coupon?id=${id}`);
        dispatch({
            type: COUPON_DELETE,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: "error message",
        });
    }
};
