import { LOAD_USER, LOAD_USER_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';
import createEventsFromAssignments from '../calendar/create-event-from-assignment';

export default function loadUser(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}`)
        .then(res => {
            dispatch(dispatchUserAsync(res.data))
        })
    }
}

function dispatchUserAsync(user){
    return {
        type: LOAD_USER,
        payload: user
    };
}

function dispatchUserResidenceAsync(residence){
    return {
        type: LOAD_USER_RESIDENCE,
        payload: residence
    };
}