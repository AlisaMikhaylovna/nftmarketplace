import nftReducer from './modules/nft'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        nft: nftReducer
    }
})

export default store