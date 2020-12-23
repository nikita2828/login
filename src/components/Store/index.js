import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import UserReducer from "./loginReduser/reducer";

const rootReducer = combineReducers({
  loginReduser: UserReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
