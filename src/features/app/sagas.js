import { all } from 'redux-saga/effects'

import { INITIALIZE_APP } from './actions'

export function* appSagas() {
    yield all(INITIALIZE_APP, console.log('app sagas initialized'))
}
