import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "users",
  initialState: "",
  reducers: {
    setToken: (state, action) => {
     return state= action.payload;
    },
  },
});

export const { setToken} = authSlice.actions;
export default authSlice.reducer;
