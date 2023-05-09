export { postsSagas } from './sagas'
export { fetchPostsFailure, fetchPostsSuccess } from './actions'
export { postsReducer } from './reducers'
export {
    selectPosts,
    selectPostsLoadingState,
    selectPostsFetchError
} from './selectors'
