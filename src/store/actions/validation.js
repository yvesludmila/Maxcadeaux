import axios from 'axios';

import {
    CREATE_VALIDATION,
    PENDING_AMOUNT,
    VALIDATION_BY_USER,
} from '../types';

export const createValidation = (data) => async (dispatch) => {
    const response = await axios.post(`/api/validation/create`, data);
    try {
        dispatch({
            type: CREATE_VALIDATION,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: 'error message',
        });
    }
};

export const getValidationByUser = (id) => async (dispatch) => {
    const response = await axios.get(`/api/validation/user?id=${id}`);
    let sum = 0;
    for (const data of response.data) {
        if (data.etat === 'PENDING') sum += data.remuneration;
    }
    try {
        dispatch({
            type: VALIDATION_BY_USER,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: 'error message',
        });
    }
};

export const getPendingAmount = (id) => async (dispatch) => {
    const responseValidation = await axios.get(`/api/validation/user?id=${id}`);
    const responseMission = await axios.post('/api/command/user', {
        userID: id,
    });
    let sum = 0;
    for (const data of responseValidation.data) {
        if (data.etat === 'PENDING') sum += data.remuneration;
    }

    // for (const data of responseMission.data) {
    //   if (data.status === 'PENDING') sum += data.amount;
    // }
    // console.log(sum);
    try {
        dispatch({
            type: PENDING_AMOUNT,
            payload: sum,
        });
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: 'error message',
        });
    }
};
