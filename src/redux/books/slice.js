import { createSlice } from "@reduxjs/toolkit";
import { addBook, addBookById, getBooks, getOwnBooks } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    userBooks: [],
    totalPages: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, handlePending)
      .addCase(getBooks.fulfilled, (state, action) => {
        if (state.books.length && action.meta.arg.page > 1) {
          state.books = [...state.books, ...action.payload.results];
        } else {
          state.books = action.payload.results;
        }
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBook.pending, handlePending)
      .addCase(addBook.fulfilled, (state, action) => {
        state.userBooks = [
          ...state.userBooks.filter((book) => book._id !== action.payload._id),
          action.payload,
        ];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBookById.pending, handlePending)
      .addCase(addBookById.fulfilled, (state, action) => {
        state.userBooks = [
          ...state.userBooks.filter((book) => book._id !== action.payload._id),
          action.payload,
        ];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnBooks.fulfilled, (state, action) => {
        const uniqueBooks = new Set(action.payload);
        state.userBooks = [...uniqueBooks];
      });
  },
});

export default booksSlice.reducer;
