import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@src/store/auth.store";
import productReducer from "@src/store/products.store";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export { store };
