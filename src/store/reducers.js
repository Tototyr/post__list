import { combineReducers } from 'redux'

import { appReducer } from '../features/app/reducers'
import { usersReducer } from '../features/users/reducers'

export const rootReducer = combineReducers({
    users: usersReducer,
    app: appReducer
})
