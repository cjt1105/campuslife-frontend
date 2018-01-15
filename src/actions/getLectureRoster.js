import { LOAD_LECTURE_ROSTER } from './types';
import axios from 'axios';
import api from './api';

export default function getLectureRoster(id) {
    return dispatch => {
        axios.get(`${api}/lectures/${id}/students`)
        .then((res) => {
            const students = res.data.map(student => {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    lastName: student.lastName
                }
            })
            dispatch(getLectureRosterAsync(students));
        })
    }
}

function getLectureRosterAsync(students){
    return {
        type: LOAD_LECTURE_ROSTER,
        payload: students
    };
}