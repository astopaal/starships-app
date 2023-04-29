import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {STATUS} from "../utils/status";
import axios from "axios";

//initial states
const initialState = {
    starships: [],

    //I set the initial status to idle
    starshipsStatus: STATUS.IDLE,
    starshipDetail: [],
    starshipDetailStatus: STATUS.IDLE,

    //The reason why I keep page is that by default page=1 comes from the api.
    currentPage: 1,
};

//this function gets all starships
export const getStarships = createAsyncThunk(
    "getStarships",
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/starships/?page=${page}`);
            return response.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

//gets a starships details by id
export const getStarshipDetails = createAsyncThunk(
    "getStarshipDetailsse",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/starships/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

//slice
const starshipSlice = createSlice({
    name: "starships",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /* status is sent in each case according to the promise status. */
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
