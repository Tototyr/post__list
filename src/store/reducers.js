import { combineReducers } from 'redux'

import { appReducer } from '../entity/app'
import { usersReducer } from '../entity/users'


export const rootReducer = combineReducers({
    users: usersReducer,
    app: appReducer
})