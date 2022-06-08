import {combineReducers} from 'redux';
import cartReducer from './CartReducer';
const rootReducers = combineReducers({
    cart: cartReducer,
});
export default rootReducers;
