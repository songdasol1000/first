import { combineReducers } from "redux";
import counter from "./counter";
import todoList from "./todos";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({ counter, todoList, sample, loading });

export default rootReducer;





