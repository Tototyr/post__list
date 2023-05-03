import { INITIALIZE_APP } from './actions'

const initialState = {
    isInitialized: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
    case INITIALIZE_APP:
        return {
            ...state,
            isInitialized: true
        }
    default:
        return state
    }
}
