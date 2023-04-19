import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'
import axios from 'axios'

const initialState = {
    starships: [],
    starshipsStatus: STATUS.IDLE,
    starshipDetail: [],
    starshipDetailStatus : STATUS.IDLE
}

export const getStarships = createAsyncThunk('getStarships', async() => {
    const response = await axios.get("https://swapi.dev/api/starships")
    const data = await response.json()
    return data
})
export const getStarshipDetails = createAsyncThunk('getStarshipDetails', async(id) => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
    const data = await response.json()
    return data
})

const starshipSlice = createSlice({
    name: "starships",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getStarships.pending, (state) => {
            state.starshipsStatus = STATUS.LOADING
        })
        .addCase(getStarships.fulfilled, (state, action) => {
            state.starshipsStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(getStarships.rejected, (state) => {
            state.starshipsStatus = STATUS.FAIL
        })
        .addCase(getStarshipDetails.pending, (state) => {
            state.starshipDetailStatus = STATUS.LOADING
        })
        .addCase(getStarshipDetails.fulfilled, (state, action) => {
            state.starshipDetailStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(getStarshipDetails.rejected, (state) => {
            state.starshipDetailStatus = STATUS.FAIL
        })
    }

})

export default starshipSlice.reducer