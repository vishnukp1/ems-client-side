import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: true,
  reducers: {
    setLogin: (state, action) => {
      return (state = false);
    },
    setSignup: (state, action) => {
      return (state = true);
    },
  },
});

export const { setLogin, setSignup } = loginSlice.actions;
export default loginSlice.reducer;
