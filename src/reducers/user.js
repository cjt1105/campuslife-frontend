import { LOAD_USER, ADD_USER, EDIT_USER_DETAILS } from '../actions/types';

export default function(state=null, action){

    switch(action.type){
        case LOAD_USER:
            return action.payload
        case EDIT_USER_DETAILS:
            return action.payload
        default:
            return state

    }
}