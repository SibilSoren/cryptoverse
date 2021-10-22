import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cryptoGlobalStats: {}
}

const cryptoGlobalStatsSlice = createSlice({
    name: "cryptoGlobalStats",
    initialState,
    reducers: {
        addGlobalStats: (state, action) => {
            state.cryptoGlobalStats = action.payload;
        }
    }
})

export const { addGlobalStats } = cryptoGlobalStatsSlice.actions;
export default cryptoGlobalStatsSlice.reducer;