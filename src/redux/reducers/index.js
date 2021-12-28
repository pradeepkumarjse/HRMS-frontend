import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import uploadReducer from "./uploadReducer";

import auth from './auth';

export * from "./user/userActions";

export default combineReducers({
    upload: uploadReducer,
    user: userReducer,
    auth
})