import { createSelector } from '@reduxjs/toolkit'

export const selectApp = createSelector((state) => state.app.isInitialized)