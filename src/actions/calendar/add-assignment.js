import { CREATE_ASSIGNMENT } from '../types';
import axios from 'axios';
import api from '../api';
import { dates } from '../calendar/date-helpers'

export default function addAssignment(assignment, lectureId) {
    return dispatch => {
        axios.post(`${api}/lectures/${lectureId}/addAssignment`, assignment)
        .then((res) => {
            dispatch(createAssignmentAsync(res.data))
        })
    }
}

function createAssignmentAsync(assignment){
    return {
        type: CREATE_ASSIGNMENT,
        payload: assignment
    };
}