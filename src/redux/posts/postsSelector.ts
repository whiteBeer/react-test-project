import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectPostsSlice = (state: RootState) => state.posts;

export const selectPosts = createSelector(
  [selectPostsSlice],
  (postsSlice) => postsSlice.list
);

export const selectPostsLoading = createSelector(
  [selectPostsSlice],
  (postsSlice) => postsSlice.loading
);

export const selectPostsError = createSelector(
  [selectPostsSlice],
  (postsSlice) => postsSlice.error
);
