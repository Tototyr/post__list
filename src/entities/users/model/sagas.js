import { all, call, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../../app/model/actions'
import { fetchUsersApi } from '../lib'
import { fetchUsersFailure, fetchUsersSuccess } from './actions'

export function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(users))
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

export function* watchFetchUsers() {
    yield takeLatest(INITIALIZE_APP, fetchUsers)
}

export function* usersSagas() {
    yield all([watchFetchUsers()])
}
