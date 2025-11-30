import { createSlice } from "@reduxjs/toolkit";
import {
  getTags,
  getTagById,
  addTag,
  updateTag,
  deleteTag,
  getTagsBySlug,
} from "./thunk";

export const initialState = {
  tags: [],
  selectedTag: null,
  error: {},
};

const TagsSlice = createSlice({
  name: "TagsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.tags = action.payload.data;
    });
    builder.addCase(getTags.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // GET BY ID
    builder.addCase(getTagById.fulfilled, (state, action) => {
      state.selectedTag = action.payload;
    });
    builder.addCase(getTagById.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // GET BY SLUG
    builder.addCase(getTagsBySlug.fulfilled, (state, action) => {
      state.selectedTag = action.payload;
    });
    builder.addCase(getTagsBySlug.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // ADD
    builder.addCase(addTag.fulfilled, (state, action) => {
      state.tags.unshift(action.payload);
    });
    builder.addCase(addTag.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // UPDATE
    builder.addCase(updateTag.fulfilled, (state, action) => {
      const updatedId = action.payload.id || action.payload._id;
      state.tags = state.tags.map((tag) =>
        (tag.id?.toString() || tag._id?.toString()) === updatedId?.toString()
          ? { ...tag, ...action.payload }
          : tag
      );
    });
    builder.addCase(updateTag.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // DELETE
    builder.addCase(deleteTag.fulfilled, (state, action) => {
      state.tags = state.tags.filter(
        (tag) => tag.id.toString() !== action.payload.id.toString()
      );
    });
    builder.addCase(deleteTag.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });
  },
});

export default TagsSlice.reducer;
