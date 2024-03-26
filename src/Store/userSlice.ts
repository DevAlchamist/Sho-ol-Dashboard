// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../config/httpService"; // Ensure this import path is correct
import { RootState } from "@/Store/rootReducer";
import authServices, { RegisterData } from "@/services/auth.services";
import userServices from "@/services/user.services";
import { useSelector } from "react-redux";

// Define the type for a user
type User = {
  id: number;
  username: string;
  email: string;
  class: string;
  createdAt: string;
  updatedAt: string;
  password: string;
  role: "SuperAdmin" | "Admin" | "User";
  // Add other user properties as needed
};

// Define the state type for the users slice
type UsersState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  usersInfo: User[] | null;
};

// Define the initial state
const initialState: UsersState = {
  status: "idle",
  error: null,
  usersInfo: [],
};

// Create the async thunk for fetching users
export const getUsersAsync = createAsyncThunk(
  "users/getUsers",
  async (userToken: string) => {
    const response = await userServices.getUsers(userToken); // Adjust the endpoint as necessary
    if (!response) {
      throw new Error("No data received from the API");
    }
    return response;
  }
);

// Create the users slice
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state:RootState, action) => {
        state.usersInfo = (action.payload);
        state.status = "succeeded";
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const selectGetAllUsers = (state: RootState) => state.user.usersInfo;
export const selectUsersStatus = (state: RootState) => state.user.status;
export const selectUsersErrors = (state: RootState) => state.user.error;

export default usersSlice.reducer;
