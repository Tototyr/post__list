import React from 'react'
import { useSelector } from 'react-redux'

import { initializeApp } from './entities/app'
import { selectPostsWithUsers } from './features'
import { store } from './store'

store.dispatch(initializeApp())

export function App() {
    const postWithUsers = useSelector(selectPostsWithUsers)

    console.log(postWithUsers)

    return <div className="App" />
}
