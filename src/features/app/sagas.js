import { all, call, put, take } from 'redux-saga/effects'

import { fetchUsersFailure, fetchUsersSuccess } from '../users/actions'
import { fetchUsersApi } from '../users/api/users'


export function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi)
        yield put(fetchUsersSuccess(data))
    } catch (error) {
        yield put(fetchUsersFailure(error))
    }
}

function* watchFetchUsers() {
    yield take("app/INITIALIZE_APP")
    yield put(fetchUsers())
}

export default function* usersSaga() {
    yield all([fetchUsers(), watchFetchUsers()])
}