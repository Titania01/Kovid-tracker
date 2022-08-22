
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import statReducer from "./reducers";

export default createStore(statReducer, applyMiddleware(thunk));
