import axios from 'axios'

export function fetchPostsApi() {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.data)
        .catch((error) => {
            throw error
        })
}
