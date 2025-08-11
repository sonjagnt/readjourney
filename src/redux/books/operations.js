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
