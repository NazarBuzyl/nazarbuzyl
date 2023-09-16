import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuthLogin = createAsyncThunk(
  "auth/fetchAuthLogin",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);
const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchAuthLogin.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuthLogin.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;
