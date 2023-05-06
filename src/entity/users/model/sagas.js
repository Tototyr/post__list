import { all, call, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../../app/model/actions'
import { fetchUsersApi } from '../api/users'
import { fetchUsersFailure, fetchUsersSuccess } from './actions'


export function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(data))
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

export function* watchFetchUsers() {
    yield takeLatest(INITIALIZE_APP, fetchUsers)
}

export function* usersSagas() {
    yield all([watchFetchUsers()])
}