import { LOAD_SINGLE_ASSIGNMENT, LOAD_ASSIGNMENT_COMMENTS } from '../types';
import api from '../api';
import axios from 'axios';

export default function getAssignment(assignmentId) {
    return dispatch => {
        return axios.get(`${api}/assignments/${assignmentId}`)
        .then(res => {
            dispatch(dispatchAssignmentDetailsAsync(res.data))
        })
        .then(() => {
            axios.get(`${api}/assignments/${assignmentId}/comments`)
            .then((_res) => {
                dispatch(dispatchAssignmentCommentsAsync(_res.data))
            })
        })
    }
}

function dispatchAssignmentDetailsAsync(assignment) {
    return {
        type: LOAD_SINGLE_ASSIGNMENT,
        payload: assignment
    }
}

function dispatchAssignmentCommentsAsync(comments) {
    return {
        type: LOAD_ASSIGNMENT_COMMENTS,
        payload: comments
    }
}