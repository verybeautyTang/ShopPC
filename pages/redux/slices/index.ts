import { combineReducers } from "@reduxjs/toolkit"
import productList from "./productList"
const rootReducer = combineReducers({
  productList,
})

export default rootReducer
