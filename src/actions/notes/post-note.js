import { POST_NOTE } from '../types';
import axios from 'axios';
import api from '../api';
import { generateCloudinaryUploadRequest } from '../generate-cloudinary-request';

export default function postNote(noteObject, userId) {
    console.log(noteObject)
    return dispatch => {
        const lectureId = parseInt(noteObject.lecture)
        const description = noteObject.description
        const requestObject = generateCloudinaryUploadRequest(noteObject.file)
        const url = requestObject.url
        const formData = requestObject.form_data
        console.log('heyeheyhe', lectureId, description)
        axios.post(url, formData)
        .then(res => {
            const data = res.data
            const requestBody = {
                url: data.secure_url,
                timestamp: data.created_at,
                description: noteObject.description
            }

            axios.post(`${api}/notes`, requestBody)
            .then(_res => {
                axios.post(`${api}/users/${userId}/addNote/${_res.data.id}/lecture=${parseInt(noteObject.lecture)}`)
                .then(res_ => {
                    postNoteAsync(_res.data)
                })
            })
            .catch(err => console.log(err.response))
        })
    }
}

function postNoteAsync(note){
    return {
        type: POST_NOTE,
        payload: note
    };
}