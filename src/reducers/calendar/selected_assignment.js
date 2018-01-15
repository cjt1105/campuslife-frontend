import { SELECT_ASSIGNMENT } from '../../actions/types'

export default function(state = [], action){
    switch(action.type){
        case SELECT_ASSIGNMENT:
            return action.payload
        default:
            return state
    }
}