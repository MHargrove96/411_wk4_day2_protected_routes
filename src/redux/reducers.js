import { combineReducers } from "redux";

export const user = (state = null) => state ;
export const cars = (state = []) => state ;

export default combineReducers({ user, cars})