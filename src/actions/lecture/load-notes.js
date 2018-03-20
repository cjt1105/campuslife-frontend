import { LOAD_LECTURE_NOTES } from '../types';
import api from '../api';
import axios from 'axios';

export default function loadNotes(lectureId) {
    return dispatch => {
        return axios.get(`${api}/lectures/${lectureId}/notes`)
        .then(res => {
            dispatch(dispatchNotesAsync(res.data))
        })
    }
}

function dispatchNotesAsync(notes) {
    return {
        type: LOAD_LECTURE_NOTES,
        payload: notes
    }
}