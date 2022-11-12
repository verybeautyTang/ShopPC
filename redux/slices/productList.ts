import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import {data, DataType} from '../../components/data'
import build from "next/dist/build"

export type ProductListState = {
  list: DataType[]
}

const initialState: ProductListState = {
  list: data,
}

export const GetProducts = createAsyncThunk("productList/list", async (list: DataType[]) => {
console.log('我执行了吗？')
  return list
})

const userSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProjectAnalyse: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.list =  action.payload
    })
  },
  
})

const productReducer = userSlice.reducer

export const { setProjectAnalyse } = userSlice.actions
export const ProductSelector = (state: RootState): ProductListState => state.productList

export default productReducer
