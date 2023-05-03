import { all } from 'redux-saga/effects'

import usersSaga from '../features/app/sagas'

export default function* rootSaga() {
    yield all([usersSaga()])
}
