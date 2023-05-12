import axios from 'axios'

export function fetchUsersApi() {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
        .catch((error) => {
            throw error
        })
}
