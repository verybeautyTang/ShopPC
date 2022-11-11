
import { Provider } from "react-redux"
import store from './redux/store';

import type { NextPage } from 'next'

import List from "./view/project"
const Home = () =>  {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  )
}

export default Home