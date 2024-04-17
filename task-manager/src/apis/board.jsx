import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../Core/tools/request";
import { requestMethods } from "../Core/Enums/requestMethods";


export const createBoard = createAsyncThunk(
  "board/create",
  async (boardData, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.POST,
        route: "/boards",
        body: boardData,
      });
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBoards = createAsyncThunk(
  "board/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.GET,
        route: "/boards",
      });
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "board/update",
  async ({ id, boardData }, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.PUT,
        route: `/boards/${id}`,
        body: boardData,
      });
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "board/delete",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.DELETE,
        route: `/boards/${id}`,
      });
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
