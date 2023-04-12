import counterSlice from "@/stores/counter/counter.store";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  counterSlice: counterSlice,
});
