import { LOAD_ALL_POSTS } from './types';
import axios from 'axios';
import api from './api';

export default function getPosts(source) {
    return dispatch => {
       return  axios.get(`${api}/posts`)
        .then(res => {
            dispatch(getAllPostsAsync(res.data))
        })
    }
}

function getAllPostsAsync(posts){
    return {
        type: LOAD_ALL_POSTS,
        payload: posts
    };
}