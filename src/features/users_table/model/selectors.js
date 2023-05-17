import { createSelector } from '@reduxjs/toolkit'

import { selectPosts } from '../../../entities/posts'
import { selectUsersMap } from '../../../entities/users'
import { getUsersWithPosts } from './get_users_with_posts'

export const selectPostsWithUsers = createSelector(
    [selectPosts, selectUsersMap],
    getUsersWithPosts
)
