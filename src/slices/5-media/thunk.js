import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL_MEDIA;

// ✅ GET ALL MEDIA
export const getMedia = createAsyncThunk(
  "media/getAll",
  async ({ type, page = 1, limit = 20, search = "" }, { rejectWithValue }) => {
    try {
      let url = "";
      const query = new URLSearchParams();
      query.append("page", page);
      query.append("limit", limit);
      query.append("sort", "-createdAt");

      switch (type) {
        case "images":
          if (search) query.append("search", search);
          query.append("fields", "id,originalName,url,size,tags,createdAt");
          url = `${API_URL}/images?${query.toString()}`;
          break;
        case "videos":
          if (search) query.append("search", search);
          query.append("size[lte]", 100000000);
          url = `${API_URL}/videos?${query.toString()}`;
          break;
        case "documents":
          if (search) query.append("search", search);
          query.append("mimeType[contains]", "pdf");
          url = `${API_URL}/documents?${query.toString()}`;
          break;
        default:
          throw new Error("Invalid media type");
      }

      const response = await axios.get(url);
      return { type, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ ADD / UPLOAD MEDIA
export const addMedia = createAsyncThunk(
  "media/add",
  async ({ type, file, title }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("title", title);

      let url = "";
      switch (type) {
        case "images":
          url = `${API_URL}/images/upload`;
          break;
        case "videos":
          url = `${API_URL}/videos/upload`;
          break;
        case "documents":
          url = `${API_URL}/documents/upload`;
          break;
        default:
          throw new Error("Invalid media type");
      }

      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(`${type} Uploaded Successfully`, { autoClose: 3000 });
      return { type, data: response.data };
    } catch (error) {
      const message =
        error.response?.data?.message || `Failed to Upload ${type}`;
      toast.error(message, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || { message });
    }
  }
);

// ✅ DELETE MEDIA
export const deleteMedia = createAsyncThunk(
  "media/delete",
  async ({ type, id }, { rejectWithValue }) => {
    try {
      let url = "";
      switch (type) {
        case "images":
          url = `${API_URL}/images/${id}`;
          break;
        case "videos":
          url = `${API_URL}/videos/${id}`;
          break;
        case "documents":
          url = `${API_URL}/documents/${id}`;
          break;
        default:
          throw new Error("Invalid media type");
      }

      await axios.delete(url);
      toast.success(`${type} Deleted Successfully`, { autoClose: 3000 });
      return { type, id };
    } catch (error) {
      toast.error(`Failed to Delete ${type}`, { autoClose: 3000 });
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
