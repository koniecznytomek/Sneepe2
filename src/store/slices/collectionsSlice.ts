import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollectionsState, ICollections, ICollection } from 'types';

const initialState: ICollectionsState = {
    collections: [],
};

const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        addCollections: (state, { payload }: PayloadAction<ICollections[]>) => {
            state.collections = payload;
        },
        addCollection: (state, { payload }: PayloadAction<string>) => {
            state.collections.push({ name: payload, gists: [] });
        },
        addToCollection: (state, { payload }: PayloadAction<ICollection>) => {
            const collection = state.collections.find(item => item.name === payload.name);
            collection?.gists.push(payload.gist);
        },
        deleteCollection: (state, { payload }: PayloadAction<string>) => {
            state.collections = state.collections.filter(collection => collection.name !== payload);
        },
        // deleteFromCollection: (state, { payload }: PayloadAction<Collection>) => {
        //     state.collections.map(item =>
        //         item.name === payload.name
        //             ? (item.gists = item.gists.filter(gist => gist !== payload.gist))
        //             : item
        //     );
        // },
        renameCollection: (state, { payload }: PayloadAction<{ name: string; newName: string }>) => {
            state.collections = state.collections.map(collection =>
                collection.name === payload.name ? { name: payload.newName, gists: collection.gists } : collection,
            );
        },
    },
});

export const {
    addCollections,
    addCollection,
    deleteCollection,
    renameCollection,
} = collectionsSlice.actions;
export default collectionsSlice.reducer;
