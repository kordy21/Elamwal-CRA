import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL + "/subCategory";

// ✅ GET ALL
export const getSubCategories = createAsyncThunk(
  "subCategories/getAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      if (params.id) query.append("id", params.id);
      if (params.fields) query.append("fields", params.fields);
      if (params.sort) query.append("sort", params.sort);
      if (params.search) query.append("search", params.search);
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);
      if (params.categoryId) query.append("CategoryId", params.categoryId);

      const response = await axios.get(`${API_URL}?${query.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY ID or slug
export const getSubCategory = createAsyncThunk(
  "subCategories/get",
  async ({ id, slug }, { rejectWithValue }) => {
    try {
      let endpoint = "";
      if (id) {
        endpoint = `${API_URL}/${id}`;
      } else if (slug) {
        endpoint = `${API_URL}?slug=${slug}`;
      } else {
        throw new Error("Either id or slug is required");
      }

      const response = await axios.get(endpoint);
      // console.log(endpoint);
      // console.log(response.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD
export const addSubCategory = createAsyncThunk(
  "subCategories/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, data);
      toast.success("SubCategory Added Successfully", { autoClose: 3000 });
      return response.data.data;
    } catch (error) {
      let message =
        error.response?.data?.message || "Failed to Add SubCategory";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ UPDATE
export const updateSubCategory = createAsyncThunk(
  "subCategories/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      toast.success("SubCategory Updated Successfully", { autoClose: 3000 });
      return { id, ...response.data };
    } catch (error) {
      let message =
        error.response?.data?.message || "Failed to Update SubCategory";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ DELETE
export const deleteSubCategory = createAsyncThunk(
  "subCategories/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("SubCategory Deleted Successfully", { autoClose: 3000 });
      return { id };
    } catch (error) {
      toast.error("Failed to Delete SubCategory", { autoClose: 3000 });
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
