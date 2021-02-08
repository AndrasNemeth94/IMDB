import loginReducer from "./loginReducer";
import fakeReducer from "./fakeReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLoggedIn: loginReducer,
  fake: fakeReducer,
});
export default allReducers;
