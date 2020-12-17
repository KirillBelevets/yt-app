import axios from 'axios'

const KEY = 'AIzaSyA2zBYJLN9c2ux3LQ9C6bDUEzAT9FVtshs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})