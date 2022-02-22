import { createSlice } from '@reduxjs/toolkit'


export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
    },
    reducers: {
        login: (state, action) => {
        },
        logout: (state) => {
            state.user=null;
        },

    },
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer;
