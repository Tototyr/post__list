import { combineReducers } from 'redux'

import { usersReducer } from '../features/users/reducers'

export const rootReducer = combineReducers({
    users: usersReducer
})
