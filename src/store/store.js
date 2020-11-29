import { createStore, applyMiddleware } from 'redux';// 只能处理同步
import thunk from 'redux-thunk';

import reducer from '../reducers/math';


const store = createStore(reducer, applyMiddleware(thunk));


export default store;
