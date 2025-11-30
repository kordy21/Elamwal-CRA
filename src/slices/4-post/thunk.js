import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL + "/Post";

// ✅ GET ALL
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      if (params.id) query.append("id", params.id);
      if (params.fields) query.append("fields", params.fields);
      if (params.sort) query.append("sort", params.sort);
      if (params.search) query.append("search", params.search);
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);
      if (params.is_featured) query.append("is_featured", params.is_featured);
      if (params.is_active) query.append("is_active", params.is_active);
      if (params.is_trending) query.append("is_trending", params.is_trending);
      if (params.type) query.append("type", params.type);
      if (params.parentSubCategoryId)
        query.append("parentSubCategoryId", params.parentSubCategoryId);

      const response = await axios.get(`${API_URL}?${query.toString()}`);
      // console.log(`${API_URL}?${query.toString()}`);

      return {
        params,
        data: response.data.data,
        meta: response.data.responseDetails,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY ID
export const getPostById = createAsyncThunk(
  "posts/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY SLUG
export const getPostBySlug = createAsyncThunk(
  "posts/getBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?slug=${slug}`);
      // console.log(response.data.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET Post BY subCategory slug
export const getPostsBySubCategory = createAsyncThunk(
  "posts/getPostsBySubCategory",
  async ({ slug, type, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/getPostsBySubCategory?slug_subCategory=${slug}&page=${
          page ? page : 1
        }&limit=${limit}&type=${type}`
      );
      // console.log(response.data);
      // console.log(
      //   `${API_URL}/getPostsBySubCategory?slug_subCategory=${slug}&page=${
      //     page ? page : 1
      //   }&limit=${limit}&type=${type}`
      // );
      return {
        slug,
        data: response.data.data,
        meta: response.data.meta,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD
export const addPost = createAsyncThunk(
  "posts/add",
  async (data, { rejectWithValue }) => {
    // console.log(data);
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Post Added Successfully", { autoClose: 3000 });
      return response.data;
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Add Post";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ UPDATE
export const updatePost = createAsyncThunk(
  "posts/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      toast.success("Post Updated Successfully", { autoClose: 3000 });
      return { id, ...response.data };
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Update Post";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ DELETE
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Post Deleted Successfully", { autoClose: 3000 });
      return { id };
    } catch (error) {
      toast.error("Failed to Delete Post", { autoClose: 3000 });
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET POSTS BY PROFILE ID
export const getPostsByProfileId = createAsyncThunk(
  "posts/getPostsByProfileId",
  async (params = {}, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      if (params.id) query.append("id", params.id);
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);
      if (params.sort) query.append("sort", params.sort);
      if (params.search) query.append("search", params.search);
      if (params.type) query.append("type", params.type);

      const response = await axios.get(
        `${API_URL}/getPostsByProfileID?${query.toString()}`
      );

      return {
        params,
        data: response.data.data,
        meta: response.data.responseDetails,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
