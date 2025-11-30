import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL + "/profile";

// ✅ GET ALL
export const getProfiles = createAsyncThunk(
  "profiles/getAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();
      if (params.id) query.append("id", params.id);
      if (params.fields) query.append("fields", params.fields);
      if (params.type) query.append("type", params.type);
      if (params.sort) query.append("sort", params.sort);
      if (params.search) query.append("search", params.search);
      if (params.page) query.append("page", params.page);
      if (params.limit) query.append("limit", params.limit);

      const response = await axios.get(`${API_URL}?${query.toString()}`);
      // console.log(response?.data);

      return {
        data: response?.data?.data,
        meta: response?.data?.responseDetails,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ GET BY ID
export const getProfileById = createAsyncThunk(
  "profiles/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getProfileBySlug = createAsyncThunk(
  "profiles/getBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      if (!slug) throw new Error("Slug is required");

      try {
        const response = await axios.get(
          `${API_URL}/slug=${encodeURIComponent(slug)}`
        );
        return response.data?.data ?? response.data;
      } catch (err) {
        const fallback = await axios.get(
          `${API_URL}?slug=${encodeURIComponent(slug)}`
        );
        const payload = fallback.data?.data ?? fallback.data;

        if (Array.isArray(payload)) {
          return payload[0] ?? null;
        }
        return payload;
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD
export const addProfile = createAsyncThunk(
  "profiles/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Profile Added Successfully", { autoClose: 3000 });
      return response.data;
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Add Profile";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ UPDATE
export const updateProfile = createAsyncThunk(
  "profiles/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      toast.success("Profile Updated Successfully", { autoClose: 3000 });
      return { id, ...response.data };
    } catch (error) {
      let message = error.response?.data?.message || "Failed to Update Profile";
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ DELETE
export const deleteProfile = createAsyncThunk(
  "profiles/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Profile Deleted Successfully", { autoClose: 3000 });
      return { id };
    } catch (error) {
      toast.error("Failed to Delete Profile", { autoClose: 3000 });
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
