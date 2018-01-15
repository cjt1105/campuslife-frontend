import { LOAD_USER_RESIDENCE } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case LOAD_USER_RESIDENCE:
            return action.payload
        default:
            return state
    }
}