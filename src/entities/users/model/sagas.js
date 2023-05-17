import { all, call, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../../app/model/actions'
import { fetchUsers } from '../lib'
import { fetchUsersFailure, fetchUsersSuccess } from './actions'

export function* getUsers() {
    try {
        const users = yield call(fetchUsers)
        yield put(fetchUsersSuccess(users))
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

export function* watchFetchUsers() {
    yield takeLatest(INITIALIZE_APP, getUsers)
}

export function* usersSagas() {
    yield all([watchFetchUsers()])
}
