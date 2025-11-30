import { createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
  getPostBySlug,
  getPostsByProfileId,
  getPostsBySubCategory,
} from "./thunk";

export const initialState = {
  postsByParams: {},
  postsBySubCategory: {},
  posts: [],
  selectedPost: null,
  allPost: null,
  error: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET ALL
    builder.addCase(getPosts.fulfilled, (state, action) => {
      const { params, data, meta } = action.payload;

      state.posts = data;
      state.meta = meta;

      const key = JSON.stringify(params);
      state.postsByParams[key] = data;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // getPostsBySubCategory
    builder.addCase(getPostsBySubCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getPostsBySubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.error || action.error.message;
    });

    builder.addCase(getPostsBySubCategory.fulfilled, (state, action) => {
      const { slug, data, meta } = action.payload;
      state.loading = false;

      if (state?.postsBySubCategory[slug]) {
        state.postsBySubCategory[slug] = [
          ...state.postsBySubCategory[slug],
          // ...data,
        ];
      } else {
        state.postsBySubCategory[slug] = data || [];
      }

      if (!state.meta) state.meta = {};
      state.meta[slug] = meta;
    });

    // GET BY ID
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.selectedPost = action.payload.data;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // ADD
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.unshift(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // UPDATE
    builder.addCase(updatePost.fulfilled, (state, action) => {
      const updatedId = action.payload.id || action.payload._id;
      state.posts = state.posts.map((post) =>
        (post.id?.toString() || post._id?.toString()) === updatedId?.toString()
          ? { ...post, ...action.payload }
          : post
      );
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // DELETE
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id.toString() !== action.payload.id.toString()
      );
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });

    // GET BY SLUG
    builder
      .addCase(getPostBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload.data[0];
      })
      .addCase(getPostBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // ---------------- GET BY PROFILE ID ----------------
    builder.addCase(getPostsByProfileId.fulfilled, (state, action) => {
      const { params, data, meta } = action.payload;

      state.posts = data;
      state.meta = meta;

      const key = JSON.stringify(params);
      state.postsByParams[key] = data;
    });
    builder.addCase(getPostsByProfileId.rejected, (state, action) => {
      state.error = action.payload?.error || action.error.message;
    });
  },
});

export default postsSlice.reducer;
