import { LOAD_ALL_RESIDENCES } from '../types';
import axios from 'axios';
import api from '../api';

export default function getAllResidences() {
    return dispatch => {
        return axios.get(`${api}/residences`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchAllResidencesAsync(res.data))
        })
    }
}

function dispatchAllResidencesAsync(residences) {
    return {
        type: LOAD_ALL_RESIDENCES,
        payload: residences
    }
}