import { createSelector } from '@reduxjs/toolkit'

const baseSelectPosts = (state) => state.posts

export const selectPostsLoadingState = createSelector(
    [baseSelectPosts],
    (posts) => posts.isLoading
)

export const selectPostsFetchError = createSelector(
    [baseSelectPosts],
    (posts) => posts.error
)

export const selectPosts = createSelector(
    [baseSelectPosts],
    (posts) => posts.data
)
