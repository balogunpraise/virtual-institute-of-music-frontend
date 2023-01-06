import { configureStore } from '@reduxjs/toolkit'
import authProvider from './features/auth/authSlice'

export const store = configureStore({
	reducer: {
		auth: authProvider,
	},
})
