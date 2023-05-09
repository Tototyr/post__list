import { createSelector } from '@reduxjs/toolkit'

const baseSelectApp = (state) => state.app

export const selectAppInitialized = createSelector(
    [baseSelectApp],
    (app) => app.isInitialized
)
