import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { propertySlice } from "./services/propertySlice";
import { blogApiSlice } from "./services/blogSlice";
import { userApiSlice } from "./services/userSlice";

const store = configureStore({
  reducer: {
    [propertySlice.reducerPath]: propertySlice.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      propertySlice.middleware,
      blogApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export default store;
