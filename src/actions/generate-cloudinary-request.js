import sha1 from 'js-sha1'
import axios from 'axios';

export const generateCloudinaryUploadRequest = (file) => {
    const timestamp = Date.now() /1000;
    const upload_preset = 'hs456jsl';
    const cloud_name = 'campuslife';
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`
    const api_key = '964298463356249';
    const public_id = `${file.name}`;
    const app_secret = '6AYYNy-262y_iebJAXluhi2ST2w'
    const paramString = `timestamp=${timestamp}&upload_preset=${upload_preset}${app_secret}`
    const signature = sha1(paramString);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', upload_preset)
    data.append('api_key', api_key);
    data.append('signature', signature)
    data.append('timestamp', timestamp)

    return { url: cloudinaryURL, form_data: data}
}