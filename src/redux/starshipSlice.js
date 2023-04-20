import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import axios from "axios";

const initialState = {
  starships: [],
  starshipsStatus: STATUS.IDLE,
  starshipDetail: [],
  starshipDetailStatus: STATUS.IDLE,
};

export const getStarships = createAsyncThunk(
  "getStarships",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getStarshipDetails = createAsyncThunk(
    "getStarshipDetailsse",
    async (id, thunkAPI) => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );


const starshipSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStarships.pending, (state) => {
        state.starshipsStatus = STATUS.LOADING;
      })
      .addCase(getStarships.fulfilled, (state, action) => {
        state.starshipsStatus = STATUS.SUCCESS;
        state.starships = action.payload;
      })
      .addCase(getStarships.rejected, (state) => {
        state.starshipsStatus = STATUS.FAIL;
      })
      .addCase(getStarshipDetails.pending, (state) => {
        state.starshipDetailStatus = STATUS.LOADING;
      })
      .addCase(getStarshipDetails.fulfilled, (state, action) => {
        state.starshipDetailStatus = STATUS.SUCCESS;
        state.starshipDetail = action.payload;
      })
      .addCase(getStarshipDetails.rejected, (state) => {
        state.starshipDetailStatus = STATUS.FAIL;
      });
  },
});

export default starshipSlice.reducer;
