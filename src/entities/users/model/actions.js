import { createAction } from '@reduxjs/toolkit'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS, (users) => ({
    payload: users
}))

export const fetchUsersFailure = createAction(FETCH_USERS_FAILURE, (error) => ({
    payload: error
}))
