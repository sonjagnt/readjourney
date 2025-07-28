import { createSelector } from "@reduxjs/toolkit";
import { selectAuthor, selectPages, selectTitle } from "../filters/selectors";

export const selectBooks = (state) => state.books.books;
export const selectFilteredBooks = createSelector(
  [selectBooks, selectTitle, selectAuthor, selectPages],
  (books, title, author, pages) => {
    return books.filter((book) => {
      const matchesTitle = title
        ? book.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesAuthor = author
        ? book.author.toLowerCase().includes(author.toLowerCase())
        : true;
      const matchesPages = pages
        ? Number(book.totalPages) === Number(pages)
        : true;

      return matchesTitle && matchesAuthor && matchesPages;
    });
  }
);

export const selectTotalPages = (state) => state.books.totalPages;
