import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/useReducer";
export const store = configureStore({
    reducer:{
      auth: authReducer
    }
})