// src/redux/auth/thunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL + "/auth/signin";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, credentials);
      // console.log("Full Response:", response.data);

      const data = response.data.data || response.data;

      const authUser = {
        status: "success",
        data: {
          email: data.user?.email || data.email,
          username: data.user?.fullName || data.username,
          token: data.token?.startsWith("Bearer")
            ? data.token
            : `Bearer ${data.token}`,
        },
      };

      sessionStorage.setItem("authUser", JSON.stringify(authUser));

      return authUser;
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
