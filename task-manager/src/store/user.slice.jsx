import { createSlice } from "@reduxjs/toolkit";
import{signupUser,loginUser} from '../apis/auth';
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred";
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred";
        }
      });
  },
});

export default userSlice.reducer;
