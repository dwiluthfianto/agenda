import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export const reducer = combineReducers({todoReducer})