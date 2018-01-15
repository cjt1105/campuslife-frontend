import { LOAD_SINGLE_RESIDENCE } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case LOAD_SINGLE_RESIDENCE:
            return action.payload
        default:
            return state
    }
}