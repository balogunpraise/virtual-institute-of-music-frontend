import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	isLoading: false,
	isError: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: () => {},
})

export default authSlice.reducer


