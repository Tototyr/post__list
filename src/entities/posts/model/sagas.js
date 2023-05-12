import { all, call, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_APP } from '../../app/model/actions'
import { fetchPosts } from '../lib'
import { fetchPostsFailure, fetchPostsSuccess } from './actions'

export function* getPosts() {
    try {
        const data = yield call(fetchPosts)
        yield put(fetchPostsSuccess(data))
    } catch (error) {
        yield put(fetchPostsFailure(error.message))
    }
}

export function* watchFetchPosts() {
    yield takeLatest(INITIALIZE_APP, getPosts)
}

export function* postsSagas() {
    yield all([watchFetchPosts()])
}
