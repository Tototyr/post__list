import { createSelector } from '@reduxjs/toolkit'

const baseSelectUsers = (state) => state.users

export const selectUsersLoadingState = createSelector(
    [baseSelectUsers],
    (users) => users.isLoading
)

export const selectUsersFetchError = createSelector(
    [baseSelectUsers],
    (users) => users.error
)

export const selectUsers = createSelector(
    [baseSelectUsers],
    (users) => users.data
)

export const selectUsersMap = createSelector([selectUsers], (users) => {
    const userMap = {}

    users.forEach((user) => {
        userMap[user.id] = user
    })
    return userMap
})
