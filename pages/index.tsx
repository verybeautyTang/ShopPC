import LayoutApp from '../components/Layout'
import { Provider } from "react-redux"
import 'antd/dist/antd.css'; 
import store from './redux/store';

export default function Home() {
  return (
    <Provider store={store}>
    <LayoutApp />
  </Provider>
  )
}
