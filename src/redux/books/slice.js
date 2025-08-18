import { createSlice } from "@reduxjs/toolkit";
import {
  addBook,
  addBookById,
  finishReading,
  getBooks,
  getOwnBooks,
  removeBook,
  startReading,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const removeDuplicateBooks = (books) => {
  return books.filter(
    (book, index, self) =>
      index ===
      self.findIndex((b) => b.title === book.title && b.author === book.author)
  );
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
        state.userBooks = removeDuplicateBooks([
          ...state.userBooks,
          action.payload,
        ]);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addBookById.pending, handlePending)
      .addCase(addBookById.fulfilled, (state, action) => {
        state.userBooks = removeDuplicateBooks([
          ...state.userBooks,
          action.payload,
        ]);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnBooks.pending, handlePending)
      .addCase(getOwnBooks.fulfilled, (state, action) => {
        state.userBooks = removeDuplicateBooks(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeBook.pending, handlePending)
      .addCase(removeBook.fulfilled, (state, action) => {
        state.userBooks = state.userBooks.filter(
          (book) => book._id !== action.payload._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(startReading.pending, handlePending)
      .addCase(startReading.fulfilled, (state, action) => {
        const bookIndex = state.userBooks.findIndex(
          (book) => book._id === action.payload._id
        );
        if (bookIndex !== -1) {
          state.userBooks[bookIndex] = {
            ...state.userBooks[bookIndex],
            status: "in-progress",
          };
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(finishReading.pending, handlePending)
      .addCase(finishReading.fulfilled, (state, action) => {
        const bookIndex = state.userBooks.findIndex(
          (book) => book._id === action.payload._id
        );
        if (bookIndex !== -1) {
          state.userBooks[bookIndex] = {
            ...state.userBooks[bookIndex],
            page: action.payload.page,
          };
        }
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default booksSlice.reducer;
