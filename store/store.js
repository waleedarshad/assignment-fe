import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
const initialState= {}

const middleware = [thunk]

// const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware));
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware()));

export default store;