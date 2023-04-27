import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS } from "./actions"

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOAD_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null
        }
    case LOAD_USERS:
        return {
            ...state,
            loading: true,
            data: action.payload
        }
    case LOAD_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    default:
        return state
    }
}