import { createAction } from 'redux-actions'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPostsStart = createAction(FETCH_POSTS)
export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS, (posts) => ({
    posts
}))
export const fetchPostsFailure = createAction(FETCH_POSTS_FAILURE, (error) => ({
    error
}))
