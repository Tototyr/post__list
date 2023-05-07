import { all, call, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../../app/model/actions'
import { fetchPostsApi } from '../api/posts'
import { fetchPostsFailure, fetchPostsSuccess } from './actions'

export function* fetchPosts() {
    try {
        const data = yield call(fetchPostsApi)
        yield put(fetchPostsSuccess(data))
    } catch (error) {
        yield put(fetchPostsFailure(error))
    }
}

export function* watchFetchPosts() {
    yield takeLatest(INITIALIZE_APP, fetchPosts)
}

export function* postsSagas() {
    yield all([watchFetchPosts()])
}
