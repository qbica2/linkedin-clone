import { createSlice } from '@reduxjs/toolkit'


export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user=null;
        },

    },
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer;
