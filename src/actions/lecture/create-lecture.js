import { CREATE_LECTURE } from '../types';
import axios from 'axios';
import api from '../api';

export default function createLecture(lecture, userId){
    return dispatch => {
        return axios.post(`${api}/lectures`, lecture)
        .then((res, err) => {
            axios.post(`${api}/users/${userId}/addLecture/${res.data.id}`)
            .then(_res => {
                dispatch(dispatchCreatedLectureAsync(res.data))
            })
        })
    }

}

function dispatchCreatedLectureAsync(lecture) {
    return {
        type: CREATE_LECTURE,
        payload: lecture
    }
}