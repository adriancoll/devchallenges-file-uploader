import axios from 'axios'

export const cloudinaryApi = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1',
    headers: {
        Accept: 'application/json'
    }
})