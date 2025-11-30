import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL + "/category";
// console.log(API_URL);
// ✅ GET ALL
export const getCategories = createAsyncThunk(
  "categories/getAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      if (params.id) query.append("id", params.id);
      if (params.fields) query.append("fields", params.fields);
      if (params.sort) query.append("sort", params.sort);
      if (params.search) query.append("search", params.search);
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);

      const response = await axios.get(`${API_URL}?${query.toString()}`);
      // console.log("raw response:", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY ID
export const getCategoryById = createAsyncThunk(
  "categories/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD
export const addCategory = createAsyncThunk(
  "categories/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, data);
      toast.success("Category Added Successfully", { autoClose: 3000 });
      return response.data;
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Add Category";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ UPDATE
export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      toast.success("Category Updated Successfully", { autoClose: 3000 });
      return { id, ...response.data };
    } catch (error) {
      let message =
        error.response?.data?.message || "Failed to Update Category";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ DELETE
export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Category Deleted Successfully", { autoClose: 3000 });
      return { id };
    } catch (error) {
      toast.error("Failed to Delete Category", { autoClose: 3000 });
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
