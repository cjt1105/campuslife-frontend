import { OPEN_CREATE_ASSIGNMENT_MODAL, CLOSE_CREATE_ASSIGNMENT_MODAL } from '../../actions/types'

export default function(state = [], action){
    switch(action.type){
        case OPEN_CREATE_ASSIGNMENT_MODAL:
            return action.payload
        case CLOSE_CREATE_ASSIGNMENT_MODAL:
            return action.payload
        default:
            return state
    }
}