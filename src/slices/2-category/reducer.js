import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./thunk";

export const initialState = {
  categories: [],
  selectedCategory: null,
  error: {},
};

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload?.data || action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // GET BY ID
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.selectedCategory = action.payload;
    });
    builder.addCase(getCategoryById.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // ADD
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categories.unshift(action.payload);
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // UPDATE
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      const updatedId = action.payload.id || action.payload._id;
      state.categories = state.categories.map((cat) =>
        (cat.id?.toString() || cat._id?.toString()) === updatedId?.toString()
          ? { ...cat, ...action.payload }
          : cat
      );
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // DELETE
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (cat) => cat.id.toString() !== action.payload.id.toString()
      );
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });
  },
});

export default CategoriesSlice.reducer;
