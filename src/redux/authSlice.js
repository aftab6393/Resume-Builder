import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Store authenticated user details
  userDetails: {
    objective: "",
    experience: "",
    education: "",
    skills: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Store user info in Redux
    },
    logout: (state) => {
      state.user = null; // Clear user on logout
      state.userDetails = {
        objective: "",
        experience: "",
        education: "",
        skills: "",
      }; // Clear resume details on logout
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload; // Update resume details
    },
  },
});

export const { login, logout, updateUserDetails } = authSlice.actions;
export default authSlice.reducer;
