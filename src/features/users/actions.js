export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const loadUsersStart = () => ({
    type: FETCH_USERS
})

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
})

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
})
