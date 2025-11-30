import { createSlice } from "@reduxjs/toolkit";
import {
  getProfiles,
  getProfileById,
  addProfile,
  updateProfile,
  deleteProfile,
  getProfileBySlug,
} from "./thunk";

export const initialState = {
  profiles: [],
  selectedProfile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState: {
    profiles: [],
    meta: {},
    selectedProfile: null, // ← جديد
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // ---------------- GET ALL ----------------
    builder
      .addCase(getProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload.data;
        state.meta = action.payload.meta;
      })
      .addCase(getProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------------- GET BY SLUG ----------------
    builder
      .addCase(getProfileBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileBySlug.fulfilled, (state, action) => {
        state.loading = false;
        // action.payload متوقع يكون object (أو null لو مش موجود)
        state.selectedProfile = action.payload ?? null;
      })
      .addCase(getProfileBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

    // ---------------- GET BY ID ----------------
    builder
      .addCase(getProfileById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProfile = action.payload;
      })
      .addCase(getProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || action.error.message;
      });

    // ---------------- ADD ----------------
    builder
      .addCase(addProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles.unshift(action.payload);
      })
      .addCase(addProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || action.error.message;
      });

    // ---------------- UPDATE ----------------
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        const updatedId = action.payload.id || action.payload._id;
        state.profiles = state.profiles.map((profile) =>
          (profile.id?.toString() || profile._id?.toString()) ===
          updatedId?.toString()
            ? { ...profile, ...action.payload }
            : profile
        );
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || action.error.message;
      });

    // ---------------- DELETE ----------------
    builder
      .addCase(deleteProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = state.profiles.filter(
          (profile) => profile.id.toString() !== action.payload.id.toString()
        );
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || action.error.message;
      });
  },
});

export default profileSlice.reducer;
