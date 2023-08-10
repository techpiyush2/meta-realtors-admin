import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user");
const initialToken = localStorage.getItem("token");
const initialUserId = localStorage.getItem("userId");

const initialState = {
  isAuthenticated: !!initialToken,
  token: initialToken || null,
  user: initialUser || "",
  userId : initialUserId || ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      if (state.token) {
        localStorage.getItem("token");
        state.isAuthenticated = true;
      }
      state.token = action.payload;
      state.isAuthenticated = true;
      state.userId = action._id;
      localStorage.setItem("token", state.token);
    
    },
    logout(state, action) {
      state.token = action.payload;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
    },
    setActiveUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", state.user);
      state.isAuthenticated = true;
    },
    setActiveUserId(state, action) {
      state.userId = action.payload;
      localStorage.setItem("userId", state.userId);
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, setActiveUser,setActiveUserId } = authSlice.actions;

export default authSlice.reducer;
