import { configureStore } from '@reduxjs/toolkit'
import authProvider from './features/auth/authSlice'
import dropDownProvider from './features/dropdown/dropdownSlice'

export const store = configureStore({
	reducer: {
		auth: authProvider,
		dropdown : dropDownProvider
	},
})
