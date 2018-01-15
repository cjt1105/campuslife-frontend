import { LOAD_USER_LECTURES } from '../types';
import axios from 'axios';
import api from '../api';

export default function loadUserLectures(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/lectures`)
        .then(res => {
            dispatch(dispatchUserLecturesAsync(res.data))
        })
        .catch(err => console.log(err))
    }
}

function dispatchUserLecturesAsync(lectures){
    return {
        type: LOAD_USER_LECTURES,
        payload: lectures
    };
}