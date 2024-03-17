"use client";
import HomePage from "@/components/HomePage";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectFetchUsers,
  selectUsersErrors,
  selectUsersStatus,
} from "./userSlice";
import { AppDispatch } from "@/Store/store";
import authServices from "@/services/auth.services";

const page = () => {
  return (
    <Box>
      <HomePage />
    </Box>
  );
};

export default page;
