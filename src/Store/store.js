import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/useReducer";
import loginReducer from "../Reducers/loginReducer";
import addstaffReducer from "../Reducers/addstaffReducer";



export const store = configureStore({
    reducer:{
      auth: authReducer,
      login:loginReducer,
      addstaff:addstaffReducer
      
    
    }
})