import { LOAD_USER } from '../types';
import axios from 'axios';
import api from '../api';
import createEventsFromAssignments from '../calendar/createEventFromAssignment';

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