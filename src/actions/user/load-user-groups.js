import { LOAD_USER_GROUPS } from '../types';
import axios from 'axios';
import api from '../api';

export default function loadUserGroups(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/groups`)
        .then(res => {
            dispatch(dispatchUserGroupsAsync(res.data))
        })
        .catch(err => console.log(err))
    }
}

function dispatchUserGroupsAsync(groups){
    return {
        type: LOAD_USER_GROUPS,
        payload: groups
    };
}