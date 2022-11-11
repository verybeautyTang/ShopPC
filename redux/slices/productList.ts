import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import {data, DataType} from '../../components/data'

export type ProductListState = {
  list: DataType[]
}

const initialState: ProductListState = {
  list: data,
}

export const GetProducts = createAsyncThunk("productList/list", async (list: DataType[]) => {

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
})

const productReducer = userSlice.reducer

export const { setProjectAnalyse } = userSlice.actions
export const ProductSelector = (state: RootState): ProductListState => state.productList

export default productReducer
