import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  avatar: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    setUserData: (
      state,
      action: PayloadAction<{ username: string; email: string; avatar: string }>
    ) => {
      (state.username = action.payload.username),
        (state.email = action.payload.email),
        (state.avatar = action.payload.avatar);
    },
  },
});

export const { getToken, setUserData } = userSlice.actions;
export default userSlice.reducer;
