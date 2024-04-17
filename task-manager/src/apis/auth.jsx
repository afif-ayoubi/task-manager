import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../Core/tools/request";
import { requestMethods } from "../Core/Enums/requestMethods";

export const signupUser = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.POST,
        route: "/register",
        body: credentials,
      });
      if (resp.data.status === "success") {
        localStorage.setItem("token", resp.data.authorisation.token);
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.POST,
        route: "/login",
        body: credentials,
      });
      if (resp.data.status === "success") {
        localStorage.setItem("token", resp.data.authorisation.token);
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
