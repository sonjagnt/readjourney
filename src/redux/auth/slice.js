import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  token: null,
};

const handlePending = (state) => {
  state.isLoggedIn = false;
  state.isLoading = true;
};

const handleRejected = (state) => {
  state.isLoading = false;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state) {
      if (state.token) {
        state.isLoggedIn = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export default authSlice.reducer;
export const { setLoggedIn } = authSlice.actions;
