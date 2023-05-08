export function fetchPostsApi() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}
