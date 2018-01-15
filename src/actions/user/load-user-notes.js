import { LOAD_USER_NOTES } from '../types';
import axios from 'axios';
import api from '../api';

export default function loadUserNotes(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/notes`)
        .then(res => {
            dispatch(dispatchUserNotesAsync(res.data))
        })
        .catch(err => console.log(err))
    }
}

function dispatchUserNotesAsync(notes){
    return {
        type: LOAD_USER_NOTES,
        payload: notes
    };
}