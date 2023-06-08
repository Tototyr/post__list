import React from 'react'

import { PostsCard } from './components/posts_cards/posts_cards'
import { UsersLinks } from './components/users_links/users_links'
import { initializeApp } from './entities/app'
import { store } from './store'


store.dispatch(initializeApp())

export function App() {
    return (
        <div className="App">
            <UsersLinks />
            <PostsCard />
        </div>
    )
}