// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../config/httpService"; // Ensure this import path is correct
import { RootState } from "@/Store/rootReducer";
import authServices, { RegisterData } from "@/services/auth.services";
import userServices from "@/services/user.services";

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
  usersInfo: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

// Define the initial state
const initialState: UsersState = {
  status: "idle",
  error: null,
  usersInfo: [],
};

// Create the async thunk for fetching users
export const getAllUsersAsync = createAsyncThunk(
  "users/getUsers",
  async (userToken: string) => {
    const response = await userServices.getAllUsers(userToken); // Adjust the endpoint as necessary
    if (!response) {
      throw new Error("No data received from the API");
    }
    return response;
  }
);

// Create the users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsersAsync.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.usersInfo = action.payload;
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const selectGetAllUsersAsync = (state: UsersState) => state.usersInfo;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUsersErrors = (state: RootState) => state.users.error;

export default usersSlice.reducer;
