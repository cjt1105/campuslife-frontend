import { LOAD_ALL_RESIDENTS } from '../types';
import axios from 'axios';
import api from '../api';

export default function getResidents(residenceId) {
    return dispatch => {
        return axios.get(`${api}/residences/${residenceId}/residents`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchResidentsAsync(res.data))
        })
    }
}

function dispatchResidentsAsync(residents) {
    return {
        type: LOAD_ALL_RESIDENTS,
        payload: residents
    }
}