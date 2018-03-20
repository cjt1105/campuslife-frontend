import {LOAD_SINGLE_RESIDENCE,
        LOAD_ALL_RESIDENTS,
        LOAD_ALL_LOST_AND_FOUND_ITEMS_FOR_RESIDENCE,
        LOAD_STALL_WALL_FOR_RESIDENCE,
        CLEAR_RESIDENCE_STATE
} from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case LOAD_SINGLE_RESIDENCE:
            return {
                residence: action.payload,
            }
            case CLEAR_RESIDENCE_STATE:
            console.log(action)
            return {
                residence: action.payload,
            }
        case LOAD_ALL_RESIDENTS:
            return {
                residence: state.residence,
                residents: action.payload,
                items: state.items,
                stall_wall: state.stall_wall
            }
        case LOAD_ALL_LOST_AND_FOUND_ITEMS_FOR_RESIDENCE:
            return {
                residence: state.residence,
                residents: state.residents,
                items: action.payload,
                stall_wall: state.stall_wall
            }
        case LOAD_STALL_WALL_FOR_RESIDENCE:
            return {
                residence: state.residence,
                residents: state.residents,
                items: state.items,
                stall_wall: action.payload
            }
        default:
            return state
    }
}