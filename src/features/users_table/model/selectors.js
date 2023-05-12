import { createSelector } from '@reduxjs/toolkit'

import { selectPosts } from '../../../entities/posts'
import { selectUsers } from '../../../entities/users'
import { getUsersWithPosts } from './get_users_with_posts'

export const selectPostsWithUsers = createSelector(
    [selectPosts, selectUsers],
    getUsersWithPosts
)
