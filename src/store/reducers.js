import { combineReducers } from 'redux'

import { appReducer } from '../entity/app'
import { postsReducer } from '../entity/posts'
import { usersReducer } from '../entity/users'

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    app: appReducer
})
