import { all, call, put } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../app/actions'
import { fetchUsersFailure, fetchUsersSuccess } from './actions'
import { fetchUsersApi } from './api/users'

export function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(data))
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

export function* usersSagas() {
    yield all([INITIALIZE_APP, fetchUsers()])
}
