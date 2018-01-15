import { LOAD_USER_ASSIGNMENTS, LOAD_LECTURE_ASSIGNMENTS, CREATE_ASSIGNMENT } from '../../actions/types'

export default function(state = [], action){
    switch(action.type){
        case LOAD_USER_ASSIGNMENTS:
            return action.payload
        case LOAD_LECTURE_ASSIGNMENTS:
            return action.payload
        case CREATE_ASSIGNMENT:
            console.log(action)
            return action.payload
        default:
            return state
    }
}