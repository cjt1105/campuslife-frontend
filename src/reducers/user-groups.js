import { LOAD_USER_GROUPS } from '../actions/types';

export default function(state= [], action){
    switch(action.type){
        case LOAD_USER_GROUPS:
            return action.payload
        default:
            return state

    }
}