// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userCode: null, // userId를 userCode라는 이름으로 저장
  },
  reducers: {
    setUserCode: (state, action) => {
      state.userCode = action.payload; // userId 업데이트
    },
  },
});

export const { setUserCode } = userSlice.actions;
export default userSlice.reducer;
