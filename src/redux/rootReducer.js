import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dashReducer from "./dashboardSlice"

const rootReducer=combineReducers({
    auth: authReducer,
    dash: dashReducer
});

export default rootReducer;