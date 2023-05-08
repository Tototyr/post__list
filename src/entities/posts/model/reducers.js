import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from './actions'

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
            isLoading: false,
            data: action.payload,
            error: null
        }
    case FETCH_POSTS_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    default:
        return state
    }
}
