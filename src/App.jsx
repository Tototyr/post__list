import React from 'react'

import { initializeApp } from './features/app/index'
import { store } from './store/index'

export function App() {
    store.dispatch(initializeApp())

    return <div className="App" />
}
