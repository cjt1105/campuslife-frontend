import { EDIT_USER_DETAILS } from '../types';
import axios from 'axios';
import api from '../api';

export default function editUserDetails(userDetails, userId) {
    console.log("hey", `${api}/users/${userId}/editDetails`)
    return dispatch => {
        return axios.post(`${api}/users/${userId}/editDetails`, userDetails)
        .then((res) => {
            dispatch(dispatchUpdatedUserAsync(res.data))
        })
    }
}

function dispatchUpdatedUserAsync(updatedUser) {
    return {
        type: EDIT_USER_DETAILS,
        payload: updatedUser
    }
}