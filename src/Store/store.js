import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/useReducer";
import loginReducer from "../Reducers/loginReducer";
import taskpageReducer from "../Reducers/taskpageReducer";
export const store = configureStore({
    reducer:{
      auth: authReducer,
      login:loginReducer,
      taskpage: taskpageReducer,
    }
})