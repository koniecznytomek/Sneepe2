import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Token = {
    token: string | null
}

const initialState: Token | null = {
    token: null,
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
            state.token = null;
        },
    },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
