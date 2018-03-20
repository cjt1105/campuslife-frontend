import { LOAD_STUDENTS } from '../types';
import api from '../api';
import axios from 'axios';

export default function loadStudents(lectureId) {
    return dispatch => {
        return axios.get(`${api}/lectures/${lectureId}/students`)
        .then(res => {
            dispatch(dispatchStudentsAsync(res.data))
        })
    }
}

function dispatchStudentsAsync(students) {
    return {
        type: LOAD_STUDENTS,
        payload: students
    }
}