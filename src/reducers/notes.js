import { POST_NOTE, LOAD_USER_NOTES } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case POST_NOTE:
            return action.payload
        case LOAD_USER_NOTES:
            return action.payload
        default:
            return state
    }
}