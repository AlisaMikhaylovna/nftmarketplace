import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const nftStore = createSlice({
    name: 'nft',
    initialState: {
        nftList: [],
    },
    reducers: {
        // 更改商品列表
        setNFTList(state, action) {
            state.nftList = action.payload
        },
    }
})

// 异步获取部分
const { setNFTList } = nftStore.actions
const fetchNFTList = () => {
    return async (dispatch: (arg0: { payload: any; type: "nft/setNFTList" }) => void) => {
        // 编写异步逻辑
        const res = await axios.get('http://localhost:3004/data')
        // 调用dispatch函数提交action
        dispatch(setNFTList(res.data))
    }
}

export { fetchNFTList }

const nftReducer = nftStore.reducer

export default nftReducer