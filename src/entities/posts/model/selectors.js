import { createSelector } from '@reduxjs/toolkit'

const selectGetPosts = (state) => state.posts

export const selectPostsLoadingState = createSelector(
    [selectGetPosts],
    (posts) => posts.isLoading
)

export const selectPostsFetchError = createSelector(
    [selectGetPosts],
    (posts) => posts.error
)

export const selectPosts = createSelector(
    [selectGetPosts],
    (posts) => posts.data
)
