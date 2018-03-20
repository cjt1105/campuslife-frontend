import { CREATE_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';

export default function createResidence(residenceName, residenceLatLng, userId) {
    const residence = {
        name: residenceName,
        lat: residenceLatLng.lat,
        lng: residenceLatLng.lng
    }
    return dispatch => {
        axios.post(`${api}/residences`, residence)
        .then((res) => {
            axios.post(`${api}/users/${userId}/addResidence/${res.data.id}`)
            .then(_res => console.log(res.data))
        })
    }
}

function createResidenceAsync(residence){
    return {
        type: CREATE_RESIDENCE,
        payload: residence
    };
}