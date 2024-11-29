import { combineReducers } from "redux";
import { countReducer } from "./counter";
import { messageReducer } from "./message";

export const reducers = combineReducers({
    counter: countReducer,
    message: messageReducer,
})
