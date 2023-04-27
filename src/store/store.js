import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import { loadUsersStart } from "../features/users/actions"
import { loadUsersOnStart } from "../features/users/sagas"
import { rootReducer } from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(loadUsersOnStart)

store.dispatch(loadUsersStart())
