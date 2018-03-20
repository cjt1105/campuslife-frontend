import { LOAD_SINGLE_LECTURE } from '../types';
import api from '../api';
import axios from 'axios';

export default function getSingleLecture(lectureId) {
    return dispatch => {
        return axios.get(`${api}/lectures/${lectureId}`)
        .then(res => {
            dispatch(dispatchSingleLectureAsync(res.data))
        })
    }
}

function dispatchSingleLectureAsync(lecture) {
    return {
        type: LOAD_SINGLE_LECTURE,
        payload: lecture
    }
}