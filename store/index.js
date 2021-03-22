import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user'

// storeをtree構造で管理する
const rootReducers = combineReducers({
  user: userReducer
})

const store = createStore(rootReducers)

export default store;
