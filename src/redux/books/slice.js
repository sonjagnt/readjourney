import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, handlePending)
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default booksSlice.reducer;
