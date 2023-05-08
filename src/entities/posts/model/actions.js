import { createAction } from '@reduxjs/toolkit'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS, (posts) => ({
    payload: posts
}))
export const fetchPostsFailure = createAction(FETCH_POSTS_FAILURE, (error) => ({
    payload: error
}))
