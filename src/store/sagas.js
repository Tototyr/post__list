import { all } from 'redux-saga/effects'

import { appSagas } from '../entities/app'
import { postsSagas } from '../entities/posts'
import { usersSagas } from '../entities/users'

export function* rootSaga() {
    yield all([appSagas(), usersSagas(), postsSagas()])
}
