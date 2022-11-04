import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import {data, DataType} from '../../list/data'
export type ProductListState = {
  list: DataType[] | null
}

const initialState: ProductListState = {
  list: data,
}
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
export const userSelector = (state: RootState): ProductListState => state.productList
export default userReducer
