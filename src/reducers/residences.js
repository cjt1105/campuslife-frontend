import { LOAD_ALL_RESIDENCES } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case LOAD_ALL_RESIDENCES:
            console.log(action)
            return action.payload
        default:
            return state
    }
}