import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    coins: {}
}

const cryptoCoinsSlice = createSlice({
    name: "cryptoCoins",
    initialState,
    reducers: {
        addCoins: (state, action) => {
            state.coins = action.payload
        }
    }
})

export const { addCoins } = cryptoCoinsSlice.actions;
export default cryptoCoinsSlice.reducer;