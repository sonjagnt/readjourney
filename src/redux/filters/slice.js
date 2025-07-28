import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    bookTitle: null,
    author: null,
    pages: null,
  },
  reducers: {
    setBookTitle(state, action) {
      state.bookTitle = action.payload;
    },
    setAuthor(state, action) {
      state.author = action.payload;
    },
    setPages(state, action) {
      state.pages = action.payload;
    },
    resetFilters(state) {
      state.bookTitle = null;
      state.author = null;
      state.pages = null;
    },
  },
});

export default filtersSlice.reducer;
export const { setBookTitle, setAuthor, setPages, resetFilters } =
  filtersSlice.actions;
