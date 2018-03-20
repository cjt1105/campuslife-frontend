import { LOAD_STALL_WALL_FOR_RESIDENCE } from '../types';
import axios from 'axios';
import api from '../api';

export default function getStallWallPosts(residenceId) {
    return dispatch => {
        return axios.get(`${api}/residences/${residenceId}/stallWall`)
        .then(res => {
            console.log(res.data)
            dispatch(dispatchStallWallPostsAsync(res.data))
        })
    }
}

function dispatchStallWallPostsAsync(posts) {
    return {
        type: LOAD_STALL_WALL_FOR_RESIDENCE,
        payload: posts
    }
}