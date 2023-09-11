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
  },
});

export const { addStaff,setremove} = addstaffSlice.actions;
export default addstaffSlice.reducer;