import { LOAD_ALL_GROUPS } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case LOAD_ALL_GROUPS:
            return action.payload
        default:
            return state
    }
}