import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlice/TodoSlice";

export const store = configureStore({
    reducer: todoReducer,
})