import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user'
import {composeWithDevTools} from 'redux-devtools-extension'

// storeをtree構造で管理する
const rootReducers = combineReducers({
  user: userReducer
})

const store = createStore(rootReducers, composeWithDevTools())

export default store;
