export const LOAD_USERS = "LOAD_USERS"
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS"
export const LOAD_USERS_FAILURE = "LOAD_USERS_FAILURE"

export const loadUsersStart = () => ({
    type: LOAD_USERS
})

export const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    payload: { users }
})

export const loadUsersFailure = (error) => ({
    type: LOAD_USERS_FAILURE,
    payload: { error }
})
