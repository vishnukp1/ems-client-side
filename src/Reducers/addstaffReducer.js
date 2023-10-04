import { createSlice } from "@reduxjs/toolkit";


const addstaffSlice = createSlice({
  name: "taskpge",
  initialState:false,
  reducers: {
    addStaff: (state, action) => {
     return state= true;
    },
    setremove: (state, action) => {
        return state= false;
       },
       editStaff: (state, action) => {
        return state= true;
       },
       editStaffremove: (state, action) => {
           return state= false;
          },
          AddTask: (state, action) => {
            return state= true;
           },
           removeTask: (state, action) => {
               return state= false;
              },
              requestLeave: (state, action) => {
                return state= true;
               },
               RemoveLeave: (state, action) => {
                   return state= false;
                  },
  },
});

export const { addStaff,setremove,requestLeave,RemoveLeave} = addstaffSlice.actions;
export default addstaffSlice.reducer;