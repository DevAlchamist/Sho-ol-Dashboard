// src/features/users/usersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../config/httpService"; // Ensure this import path is correct
import { RootState } from "@/Store/rootReducer";
import authServices, { RegisterData } from "@/services/auth.services";
import { LoginData } from "../../../Interface";

// Define the type for a user
type User = {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
};

// Define the state type for the users slice
type UsersState = {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

// Define the initial state
const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

// Create the async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await ApiService.get("/users"); // Adjust the endpoint as necessary
  if (!response.data) {
    throw new Error("No data received from the API");
  }
  return response.data;
});

// Create the users slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const selectFetchUsers = (state: RootState) => state.users.users;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUsersErrors = (state: RootState) => state.users.error;

export default usersSlice.reducer;
