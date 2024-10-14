import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

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
    return async (dispatch: (arg0: { payload: any; type: "nft/setNFTList" }) => void) => {
        const res = await axios.get('http://localhost:3004/data')
        dispatch(setNFTList(res.data))
    }
}

export { fetchNFTList }

const nftReducer = nftStore.reducer

export default nftReducer