import { combineReducers } from 'redux'

import { appReducer } from '../entities/app'
import { postsReducer } from '../entities/posts'
import { usersReducer } from '../entities/users'

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    app: appReducer
})
