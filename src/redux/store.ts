import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/postsSlice.ts';
import usersReducer from './users/usersSlice.ts';
import logger from './middleware/logger.ts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
