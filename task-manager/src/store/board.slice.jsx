import { createSlice } from "@reduxjs/toolkit";
import { createBoard, getBoards, updateBoard, deleteBoard } from '../apis/board';

const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards.push(action.payload); 
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred while creating the board";
        }
      })
      .addCase(getBoards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards = action.payload; 
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred while fetching boards";
        }
      })
      .addCase(updateBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const updatedBoardIndex = state.boards.findIndex(board => board._id === action.payload._id);
        if (updatedBoardIndex !== -1) {
          state.boards[updatedBoardIndex] = action.payload;
        }
      })
      .addCase(updateBoard.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred while updating the board";
        }
      })
      .addCase(deleteBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards = state.boards.filter(board => board._id !== action.payload.boardId);
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred while deleting the board";
        }
      });
  },
});

export default boardSlice.reducer;
