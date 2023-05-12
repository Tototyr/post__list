import { createSelector } from '@reduxjs/toolkit'

import { selectPosts } from '../../../entities/posts'
import { selectUsers } from '../../../entities/users'
import { PostsWithUsers } from './postsWithUsers'


export const selectPostsWithUsers = createSelector(
    [selectPosts, selectUsers],
    PostsWithUsers
)