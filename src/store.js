import { createStore ,applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/index";
import axios from 'axios';
import thunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk));

axios.defaults.baseURL = 'http://localhost:4041';


export default store;