import { call, put, takeEvery } from "redux-saga/effects"

import { LOAD_USERS, loadUsersFailure } from "./actions"
import { fetchUsers } from "./api/users"

export function* loadUsers() {
    try {
        yield call(fetchUsers)
    } catch (error) {
        yield put(loadUsersFailure(error.message))
    }
}

export function* loadUsersOnStart() {
    yield takeEvery(LOAD_USERS, loadUsers)
}
