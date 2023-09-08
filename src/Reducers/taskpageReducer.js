import { createSlice } from "@reduxjs/toolkit";


const taskpgeSlice = createSlice({
  name: "taskpge",
  initialState:false,
  reducers: {
    settaskpage: (state, action) => {
     return state= true;
    },
    setremove: (state, action) => {
        return state= false;
       },
  },
});

export const { settaskpage,setremove} = taskpgeSlice.actions;
export default taskpgeSlice.reducer;