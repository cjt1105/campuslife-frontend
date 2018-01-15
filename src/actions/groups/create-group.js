import { CREATE_GROUP } from '../types';
import axios from 'axios';
import api from '../api';

export default function createGroup(group, userId){
    return dispatch => {
        return axios.post(`${api}/groups`, group)
        .then((res, err) => {
            axios.post(`${api}/users/${userId}/joinGroup/${res.data.id}`)
            .then(_res => {
                console.log(res)
                dispatch(dispatchCreatedGroupAsync(res.data))
            })
        })
    }

}

function dispatchCreatedGroupAsync(lecture) {
    return {
        type: CREATE_GROUP,
        payload: lecture
    }
}