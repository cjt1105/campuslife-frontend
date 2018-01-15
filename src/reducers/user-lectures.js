import { LOAD_SINGLE_LECTURE, LOAD_USER_LECTURES } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case LOAD_USER_LECTURES:
            return action.payload
        default:
            return state
    }
}