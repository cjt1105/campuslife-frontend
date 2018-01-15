import { GET_ALL_LECTURES } from '../types';
import api from '../api';
import axios from 'axios';

export default function getAllLectures() {
    return dispatch => {
        return axios.get(`${api}/lectures`)
        .then(res => {
            dispatch(dispatchAllLecturesAsync(res.data))
        })
    }
}

function dispatchAllLecturesAsync(lectures) {
    return {
        type: GET_ALL_LECTURES,
        payload: lectures
    }
}