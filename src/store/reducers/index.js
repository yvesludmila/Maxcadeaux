import {combineReducers} from 'redux';
import allUserReducer from './allUser';
import pendingAmountReducer from './amount-pending';
import couponReducer from './coupon';
import messageReducer from './message';
import missionReducer from './mission';
import shopReducer from './shop';
import userReducer from './user';
import validationReducer from './validation';

export default combineReducers({
    auth: userReducer,
    messages: messageReducer,
    allUsers: allUserReducer,
    coupon: couponReducer,
    shop: shopReducer,
    mission: missionReducer,
    validation: validationReducer,
    pending: pendingAmountReducer,
});
