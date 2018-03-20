import { LOAD_SINGLE_ASSIGNMENT, LOAD_ASSIGNMENT_COMMENTS} from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case LOAD_SINGLE_ASSIGNMENT:
            return {
                details: action.payload
            }
        case LOAD_ASSIGNMENT_COMMENTS:
            return {
                details: state.details,
                comments: action.payload
            }
        default:
            return state
    }
}