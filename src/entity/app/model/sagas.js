import { take } from 'redux-saga/effects'

import { INITIALIZE_APP } from './actions'

export function* appSagas() {
    yield take(INITIALIZE_APP, console.log('app sagas initialized'))
}