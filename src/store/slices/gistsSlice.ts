import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGistsState, IGists, IFile, IFiles } from 'types/index';

const initialState: IGistsState = {
    gists: [],
};

const gistsSlice = createSlice({
    name: 'gists',
    initialState,
    reducers: {
        addGists: (state, { payload }: PayloadAction<IGists[]>) => {
            state.gists = payload;
        },
        addGist: (state, { payload }: PayloadAction<IGists>) => {
            state.gists.push(payload);
        },
        deleteGist: (state, { payload }: PayloadAction<string>) => {
            state.gists = state.gists.filter(gist => gist.name !== payload);
        },
        addFile: (state, { payload }: PayloadAction<IFile>) => {
            const gist = state.gists.find(item => item.name === payload.name);
            gist?.files.push({ name: payload.filename, text: payload.text });
        },
        updateFile: (state, { payload }: PayloadAction<{ name: string; filename: string; data: IFiles }>) => {
            state.gists = state.gists.map(gist => {
                if (gist.name === payload.name) {
                    return {
                        ...gist,
                        files: gist.files.map(file =>
                            file.name === payload.filename
                                ? { ...file, name: payload.data.name, text: payload.data.text }
                                : file,
                        ),
                    };
                }
                return gist;
            });
        },
        deleteFile: (state, { payload }: PayloadAction<{ name: string; filename: string }>) => {
            state.gists = state.gists.map(gist => {
                if (gist.name === payload.name) {
                    return {
                        ...gist,
                        files: gist.files.filter(file => file.name !== payload.filename),
                    };
                }
                return gist;
            });
        },

        editNote: (state, { payload }: PayloadAction<IFile & { newFilename: string }>) => {
            state.gists = state.gists.map(gist => {
                if (gist.name === payload.name) {
                    return {
                        ...gist,
                        files: gist.files.map(file =>
                            file.name === payload.filename
                                ? { ...file, text: payload.text, name: payload.newFilename }
                                : file,
                        ),
                    };
                }
                return gist;
            });
        },
    },
});

export const { addGists, addGist, addFile, updateFile, deleteFile, editNote } = gistsSlice.actions;

export default gistsSlice.reducer;
