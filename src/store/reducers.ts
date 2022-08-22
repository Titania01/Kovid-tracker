import { FETCH_STAT, SET_STAT } from "./action"

const initialState = {
    stat: {}
}

export default function statReducer(state = initialState, action:any){
    switch(action.type){
        case FETCH_STAT: 
        return {
            ...state, 
            stat:action.payload
        }
        case SET_STAT: 
        return {
            ...state, 
            stat:action.payload
        }
        default:
            return state
    }
}


