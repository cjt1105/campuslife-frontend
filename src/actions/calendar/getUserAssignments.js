import { LOAD_USER_ASSIGNMENTS } from '../types';
import createEventFromAssignment from './createEventFromAssignment';
import axios from 'axios';
import api from '../api';

export default function getUserAssignments(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/assignments`)
        .then((res) => {
            const assignments = createEventFromAssignment(res.data)
            dispatch(getUserAssignmentsAsync(assignments));
        })
    }
}

function getUserAssignmentsAsync(assignments){
    return {
        type: LOAD_USER_ASSIGNMENTS,
        payload: assignments
    };
}