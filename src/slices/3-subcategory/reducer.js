import { createSlice } from "@reduxjs/toolkit";
import {
  getSubCategories,
  // getSubCategoryById,
  getSubCategory,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "./thunk";

export const initialState = {
  subCategories: [],
  categoriesData: {},
  selectedSubCategory: null,
  error: {},
};

const SubCategoriesSlice = createSlice({
  name: "SubCategoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getSubCategories.fulfilled, (state, action) => {
      state.subCategories = action.payload?.data || action.payload;
    });
    builder.addCase(getSubCategories.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // GET BY ID and Slug
    // builder.addCase(getSubCategoryById.fulfilled, (state, action) => {
    //   state.selectedSubCategory = action.payload;
    // });
    // builder.addCase(getSubCategoryById.rejected, (state, action) => {
    //   state.error = action.payload?.error || action.error.message;
    // });
    // old

    // builder.addCase(getSubCategory.fulfilled, (state, action) => {
    //   state.selectedSubCategory = action?.payload?.data[0];
    // });
    // builder.addCase(getSubCategory.rejected, (state, action) => {
    //   state.error = action.payload?.error || action.error.message;
    // });
    builder.addCase(getSubCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSubCategory.fulfilled, (state, action) => {
      const slug = action.meta.arg.slug;
      if (slug) {
        state.categoriesData[slug] = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(getSubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ADD
    builder.addCase(addSubCategory.fulfilled, (state, action) => {
      state.subCategories.unshift(action.payload);
    });
    builder.addCase(addSubCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // UPDATE
    builder.addCase(updateSubCategory.fulfilled, (state, action) => {
      const updatedId = action.payload.id || action.payload._id;
      state.subCategories = state.subCategories.map((sub) =>
        (sub.id?.toString() || sub._id?.toString()) === updatedId?.toString()
          ? { ...sub, ...action.payload }
          : sub
      );
    });
    builder.addCase(updateSubCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // DELETE
    builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
      state.subCategories = state.subCategories.filter(
        (sub) => sub.id.toString() !== action.payload.id.toString()
      );
    });
    builder.addCase(deleteSubCategory.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });
  },
});

export default SubCategoriesSlice.reducer;
