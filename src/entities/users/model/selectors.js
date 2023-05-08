import { createSelector } from '@reduxjs/toolkit'

const selectGetUsers = (state) => state.users

export const selectUsersLoadingState = createSelector(
    [selectGetUsers],
    (users) => users.isLoading
)

export const selectUsersFetchError = createSelector(
    [selectGetUsers],
    (users) => users.error
)

export const selectUsers = createSelector(
    [selectGetUsers],
    (users) => users.data
)
