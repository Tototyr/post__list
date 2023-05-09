import React from 'react'
import { useSelector } from 'react-redux'

import { initializeApp } from './entities/app'
import { selectPosts } from './entities/posts'
import { selectUsers } from './entities/users'
import { store } from './store'


store.dispatch(initializeApp())

export function App() {
    const posts = useSelector(selectPosts)
    const users = useSelector(selectUsers)

    const combinedData = users.map((user) => ({
        ...user,
        posts: posts
            .filter((post) => post.id === user.id)
            .map(({ userId, ...data }) => data)
    }))

    const filteredUsersAndPosts = combinedData.map(
        ({ website, username, ...data }) => data
    )

    console.log(filteredUsersAndPosts)

    return <div className="App" />
}