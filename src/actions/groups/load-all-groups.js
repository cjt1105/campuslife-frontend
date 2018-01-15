import { LOAD_ALL_GROUPS} from '../types';
import axios from 'axios';
import api from '../api';

export default function getAllGroups() {
    return dispatch => {
        return axios.get(`${api}/groups`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchAllGroupsAsync(res.data))
        })
    }
}

function dispatchAllGroupsAsync(groups) {
    return {
        type: LOAD_ALL_GROUPS,
        payload: groups
    }
}