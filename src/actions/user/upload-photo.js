import { UPLOAD_PHOTO } from '../types';
import axios from 'axios';
import api from '../api';
import { generateCloudinaryUploadRequest } from '../generate-cloudinary-request';

export default function uploadPhoto(photo, userId) {
    return dispatch => {
        const requestObject = generateCloudinaryUploadRequest(photo)
        const url = requestObject.url
        const formData = requestObject.form_data
        axios.post(url, formData)
        .then(res => {
            const data = res.data
            const requestBody = {
                url: data.secure_url,
                timestamp: data.created_at
            }

            axios.post(`${api}/photos`, requestBody)
            .then(_res => {
                axios.post(`${api}/users/${userId}/addPhoto/${_res.data.id}`)
                .then(res_ => {
                    console.log(res_)
                })
            })
            .catch(err => console.log(err.response))
        })
    }
}

function uploadPhotoAsync(photo){
    return {
        type: UPLOAD_PHOTO,
        payload: photo
    };
}