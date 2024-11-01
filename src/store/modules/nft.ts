import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from ".."

const nftStore = createSlice({
    name: 'nft',
    initialState: {
        nftList: [],
    },
    reducers: {
        setNFTList(state, action) {
            state.nftList = action.payload
        },
    }
})

const { setNFTList } = nftStore.actions
const fetchNFTList = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get("")
        dispatch(setNFTList(res.data))
    }
}

export { fetchNFTList }

const nftReducer = nftStore.reducer

export default nftReducer