import {
    FETCH_POSTS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS
} from './actions'

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_POSTS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null
        }
    case FETCH_POSTS:
        return {
            ...state,
            loading: true,
            data: action.payload
        }
    case FETCH_POSTS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    default:
        return state
    }
}
