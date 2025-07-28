import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`books/recommend/?page=${page}`);
      console.log(res.data);

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
