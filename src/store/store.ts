import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@src/store/auth.store";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };
