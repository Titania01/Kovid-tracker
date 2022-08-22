import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import  statReducer  from './reducers'

const initialState =  {
    stat: {}
}


export default createStore(statReducer,initialState, applyMiddleware(thunk))
