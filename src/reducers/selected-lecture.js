import { LOAD_SINGLE_LECTURE, LOAD_STUDENTS } from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case LOAD_SINGLE_LECTURE:
            return {
                lecture: action.payload
            }
        case LOAD_STUDENTS:
            return {
                lecture: state.lecture,
                students: action.payload
            }
        default:
            return state
    }
}