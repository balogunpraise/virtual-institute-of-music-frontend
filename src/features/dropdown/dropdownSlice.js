import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isActive: false,
}

const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		toggleDropdown: (state) => {
			state.isActive = !state.isActive
		},
		setDropdownToFalse: (state) => {
			state.isActive = false
		},
	},
})

export const { toggleDropdown, setDropdownToFalse } = dropdownSlice.actions

export default dropdownSlice.reducer
