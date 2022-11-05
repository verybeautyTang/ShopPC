import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import {data, DataType} from '../../list/data'

export type ProductListState = {
  list: DataType[]
}

const initialState: ProductListState = {
  list: data,
}

export const GetProducts = createAsyncThunk("productList/list", async (tempData) => {
  // const response = await ()
  return tempData
})

const userSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProjectAnalyse: (state, action) => {
      state.list = action.payload
    },
  },
})

const userReducer = userSlice.reducer

export const { setProjectAnalyse } = userSlice.actions
export const ProductSelector = (state: RootState): ProductListState => state.productList

export default userReducer
