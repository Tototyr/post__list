import { all } from 'redux-saga/effects'

import { appSagas } from '../entity/app'
import { postsSagas } from '../entity/posts'
import { usersSagas } from '../entity/users'

export function* rootSaga() {
    yield all([appSagas(), usersSagas(), postsSagas()])
}
