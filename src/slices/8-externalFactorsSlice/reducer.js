import { createSlice } from "@reduxjs/toolkit";
import { getCommodities, getCurrencies, getWeather } from "./thunk";

const initialState = {
  weather: null,
  currencies: null,
  commodities: null,
  loading: false,
  error: null,
};

const externalFactorsSlice = createSlice({
  name: "externalFactors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ---------------- GET WEATHER ----------------
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
        // console.log("Weather data in reducer:", action.payload);
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------------- GET CURRENCIES ----------------
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.loading = false;
        state.currencies = action.payload;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------------- GET COMMODITIES ----------------
    builder
      .addCase(getCommodities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCommodities.fulfilled, (state, action) => {
        state.loading = false;
        state.commodities = action.payload;
      })
      .addCase(getCommodities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default externalFactorsSlice.reducer;
