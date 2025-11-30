import { createSlice } from "@reduxjs/toolkit";
import { getMedia, addMedia, deleteMedia } from "./thunk";

export const initialState = {
  images: [],
  videos: [],
  documents: [],
  selectedMedia: [],
  error: {},
  loading: false,
  uploading: false,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMedia.fulfilled, (state, action) => {
      state.loading = false;
      state[action.payload.type] =
        action.payload.data?.data || action.payload.data;
    });
    builder.addCase(getMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.error || action.error.message;
    });

    // ADD / UPLOAD
    builder.addCase(addMedia.pending, (state) => {
      state.uploading = true;
    });
    builder.addCase(addMedia.fulfilled, (state, action) => {
      state.uploading = false;
      state[action.payload.type].unshift(action.payload.data);
    });
    builder.addCase(addMedia.rejected, (state, action) => {
      state.uploading = false;
      state.error = action.payload?.error || action.error.message;
    });

    // DELETE
    builder.addCase(deleteMedia.fulfilled, (state, action) => {
      state[action.payload.type] = state[action.payload.type].filter(
        (item) => item.id.toString() !== action.payload.id.toString()
      );
    });
    builder.addCase(deleteMedia.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });
  },
});

export default mediaSlice.reducer;
