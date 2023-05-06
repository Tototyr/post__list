import {
    FETCH_USERS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS
} from './actions'

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null
        }
    case FETCH_USERS:
        return {
            ...state,
            loading: true,
            data: action.payload
        }
    case FETCH_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    default:
        return state
    }
}