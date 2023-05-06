import { createAction } from 'redux-actions'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersStart = createAction(FETCH_USERS)
export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS, (users) => ({
    users
}))
export const fetchUsersFailure = createAction(FETCH_USERS_FAILURE, (error) => ({
    error
}))