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
    totalPages: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    appendBooks(state, action) {
      state.books = state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, handlePending)
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default booksSlice.reducer;
