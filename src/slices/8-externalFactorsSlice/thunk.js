import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// ---------------- GET WEATHER ----------------
export const getWeather = createAsyncThunk(
  "externalFactors/getWeather",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/weather`);
      // console.log(response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ---------------- GET CURRENCIES ----------------
export const getCurrencies = createAsyncThunk(
  "externalFactors/getCurrencies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/currencies`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ---------------- GET COMMODITIES ----------------
export const getCommodities = createAsyncThunk(
  "externalFactors/getCommodities",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/commodities`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
