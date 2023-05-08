import React from 'react'

import { initializeApp } from './entities/app/index'
import { store } from './store/index'

store.dispatch(initializeApp())

export function App() {
    return <div className="App" />
}
