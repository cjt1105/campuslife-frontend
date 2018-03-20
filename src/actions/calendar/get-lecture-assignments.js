import { LOAD_LECTURE_ASSIGNMENTS } from '../types';
import createEventFromAssignment from './createEventFromAssignment';
import axios from 'axios';
import api from '../api';

export default function getLectureAssignments(id) {
    return dispatch => {
        axios.get(`${api}/lectures/${id}/assignments`)
        .then((res) => {
            const assignments = createEventFromAssignment(res.data)
            dispatch(getLectureAssignmentsAsync(assignments));
        })
    }
}

function getLectureAssignmentsAsync(assignments){
    return {
        type: LOAD_LECTURE_ASSIGNMENTS,
        payload: assignments
    };
}