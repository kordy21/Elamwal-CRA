import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_API_URL + "/tag";
// console.log(API_URL);

// ✅ GET ALL
export const getTags = createAsyncThunk(
  "tags/getAll",
  async ({ limit, page } = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          ...(limit && { limit }),
          ...(page && { page }),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY ID
export const getTagById = createAsyncThunk("tags/getById", async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
});

// ✅ GET BY SLUG
export const getTagsBySlug = createAsyncThunk(
  "tags/getBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?slug=${slug}`);
      // console.log("Fetched tag by slug:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD
export const addTag = createAsyncThunk(
  "tags/add",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, tag);
      toast.success("Tag Added Successfully", { autoClose: 3000 });
      return response.data;
    } catch (error) {
      // console.log("Full error object:", error);
      // console.log("Response:", error.response);
      // console.log("Response data:", error.response?.data);

      // لو السيرفر بيرجع JSON زي بتاع Postman
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to Add Tag", {
          autoClose: 3000,
        });
        return rejectWithValue(error.response.data);
      }

      // fallback لأي error تاني
      toast.error(error.message || "Something went wrong", { autoClose: 3000 });
      return rejectWithValue({ message: error.message });
    }
  }
);

// ✅ UPDATE
export const updateTag = createAsyncThunk(
  "tags/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      toast.success("Tag Updated Successfully", { autoClose: 3000 });
      return { id, ...response.data }; // 🔥 هنا هنضمن دايمًا وجود id
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Update Tag";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue({ message });
    }
  }
);

// ✅ DELETE
export const deleteTag = createAsyncThunk("tags/delete", async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    toast.success("Tag Deleted Successfully", { autoClose: 3000 });
    return { id };
  } catch (error) {
    toast.error("Failed to Delete Tag", { autoClose: 3000 });
    throw error.response?.data || error.message;
  }
});
