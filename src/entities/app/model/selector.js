import { createSelector } from '@reduxjs/toolkit'

const selectGetApp = (state) => state.app

export const selectApp = createSelector(
    [selectGetApp],
    (app) => app.isInitialized
)
