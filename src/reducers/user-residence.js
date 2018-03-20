import { LOAD_USER_RESIDENCE } from '../actions/types'

export default function(state = null, action){
    switch(action.type){
        case LOAD_USER_RESIDENCE:
            return action.payload
        default:
            return state
    }
}