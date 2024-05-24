import {
    CURRENT_USER,
    LOGOUT_USER,
    PENDING_AMOUNT,
    USER_AUTH,
    USER_ERROR,
} from '../types';

const initialState = {
    user: null,
    isAuth: false,
    loading: true,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                isAuth: action.payload.verified,
                loading: false,
                user: action.payload.user,
            };

        case CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case USER_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                isAuth: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default userReducer;
