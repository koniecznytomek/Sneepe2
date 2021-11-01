import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    // token: `${process.env.REACT_APP_TOKEN}`,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, { payload }: PayloadAction<string>) => {
            state.token = payload;
        },
        removeToken: (state) => {
            state.token = '';
        },
    },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
