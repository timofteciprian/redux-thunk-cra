import { combineReducers } from "redux";
import { items } from "./items";

export default function createRootReducer() {
  return combineReducers({
    items
  });
}

