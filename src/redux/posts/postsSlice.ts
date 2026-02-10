import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsState {
  list: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  list: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsFetching: (state) => {
      state.loading = true;
      state.error = null;
    },
    postsFetched: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    postsFetchingError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearPosts: (state) => {
      state.list = [];
    }
  },
});

export const { postsFetching, postsFetched, postsFetchingError, clearPosts } = postsSlice.actions;
export const { reducer: postsReducer } = postsSlice;
export default postsReducer;
