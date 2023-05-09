import React from 'react'

import { initializeApp } from './entities/app'
import { store } from './store'

store.dispatch(initializeApp())

export function App() {
    return <div className="App" />
}
