import { LOAD_LECTURE_ROSTER } from '../actions/types'

export default function(state = [], action){
    switch(action.type){
        case LOAD_LECTURE_ROSTER:
            return action.payload
        default:
            return state
    }
}