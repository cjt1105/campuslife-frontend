import { LOAD_USER_LECTURES } from './types';
import axios from 'axios';
import api from './api'

export default function getUserLectures(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/lectures`)
        .then((res) => {
            const lectures = res.data.map(lecture => lecture);
            dispatch(getUserLecturesAsync(lectures));
        });
    }
}

function getUserLecturesAsync(lectures){
  return {
    type: LOAD_USER_LECTURES,
    payload: lectures
  };
}