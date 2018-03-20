import { LOAD_SINGLE_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';

export default function getSingleResidence(residenceId) {
    return dispatch => {
        return axios.get(`${api}/residences/${residenceId}`)
        .then(res => {
            dispatch(dispatchSingleResidenceAsync(res.data))
        })
    }
}

function dispatchSingleResidenceAsync(residences) {
    return {
        type: LOAD_SINGLE_RESIDENCE,
        payload: residences
    }
}