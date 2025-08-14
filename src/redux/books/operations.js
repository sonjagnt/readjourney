import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ page = 1, ...filters }, thunkAPI) => {
    let currentPage = page;
    try {
      const params = new URLSearchParams({
        page: currentPage,
        ...filters,
      });
      const res = await axios.get(`books/recommend/?${params.toString()}`);

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("books/add", data);
      console.log("success");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBookById = createAsyncThunk(
  "books/addBookById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.post(`books/add/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOwnBooks = createAsyncThunk(
  "books/getOwnBooks",
  async (status, thunkAPI) => {
    try {
      const url =
        !status || status === "all"
          ? `books/own`
          : `books/own?status=${status}`;
      const res = await axios.get(url);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`books/remove/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
