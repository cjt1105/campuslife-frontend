import { LOAD_LECTURE_NOTES } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case LOAD_LECTURE_NOTES:
            return action.payload
        default:
            return state
    }
}