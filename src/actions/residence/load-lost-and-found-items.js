import { LOAD_ALL_LOST_AND_FOUND_ITEMS_FOR_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';

export default function getLostAndFoundItems(residenceId) {
    return dispatch => {
        return axios.get(`${api}/residences/${residenceId}/lostAndFoundItems`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchLostAndFoundItemsAsync(res.data))
        })
    }
}

function dispatchLostAndFoundItemsAsync(items) {
    return {
        type: LOAD_ALL_LOST_AND_FOUND_ITEMS_FOR_RESIDENCE,
        payload: items
    }
}