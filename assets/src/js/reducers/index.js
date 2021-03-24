import {combineReducers} from 'redux';
import authentication from './authentication';
import user from './user';
import payment from "./payment";
import admin from "./admin";

export default combineReducers({
    authentication, user, payment, admin
});
