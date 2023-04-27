import { call, put } from "redux-saga/effects"

import { loadUsersFailure, loadUsersSuccess } from "../actions"

export function* fetchUsers() {
    try {
        const response = yield call(
            fetch,
            "https://jsonplaceholder.typicode.com/users"
        )
        const data = yield response.json()
        yield put(loadUsersSuccess(data))
    } catch (error) {
        yield put(loadUsersFailure(error))
    }
}
