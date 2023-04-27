import { all } from "redux-saga/effects"

import { loadUsersStart } from "../features/users/actions"

export function* rootSaga() {
    yield all([loadUsersStart()])
}
