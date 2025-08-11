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
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("books/own");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
