import axios from 'axios'

export function fetchPosts() {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.data)
        .catch((error) => {
            throw error
        })
}
