import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Slice/LoginSlice";
import Plan from "./Slice/Plan";
import Teacher from "./Slice/Teacher";
const rootReducer = combineReducers({
  auth: authSlice,
  plan: Plan,
  teacher: Teacher,
});

export default rootReducer;
