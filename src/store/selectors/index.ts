import { createSelector } from '@reduxjs/toolkit';

// types
import { RootState } from 'store/rootReducer';
import { ICollections, IGists } from '../../types';

export const getToken = createSelector((state: RootState): string | null => state.auth.token, token => token);
export const getTheme = createSelector((state: RootState): string => state.theme.mode, theme => theme);
// export const getDragged = (state: RootState) => state.gist;
export const getGists = (state: RootState): IGists[] => state.gistsState.gists;
export const getCollections = (state: RootState): ICollections[] => state.collectionsState.collections;
