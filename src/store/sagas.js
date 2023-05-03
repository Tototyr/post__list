import { all } from 'redux-saga/effects'

import { appSagas } from '../features/app/sagas'
import { usersSagas } from '../features/users/sagas'

export default function* rootSaga() {
    yield all([appSagas()])
    yield all([usersSagas()])
}
