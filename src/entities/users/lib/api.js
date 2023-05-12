import axios from 'axios'

export function fetchUsers() {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
        .catch((error) => {
            throw error
        })
}
