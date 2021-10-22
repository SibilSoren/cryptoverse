import { configureStore } from "@reduxjs/toolkit";
import cryptoCoinsSlice from "./cryptoCoinsSlice";
import cryptoGlobalStatsSlice from "./cryptoGlobalStatsSlice";

const store = configureStore({
    reducer: {
        cryptoGlobalStats: cryptoGlobalStatsSlice,
        cryptoCoins: cryptoCoinsSlice
    }
})


export default store;