import { LOAD_USER_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';

export default function loadUserResidence(id) {
    return dispatch => {
        axios.get(`${api}/users/${id}/residence`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchUserResidenceAsync(res.data))
        })
        .catch(err => console.log(err))
    }
}

function dispatchUserResidenceAsync(residence){
    return {
        type: LOAD_USER_RESIDENCE,
        payload: residence
    };
}