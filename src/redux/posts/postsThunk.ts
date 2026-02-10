import type { AppDispatch } from '../store';
import { postsFetching, postsFetched, postsFetchingError } from './postsSlice';

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsFetching());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    
    const data = await response.json();
    dispatch(postsFetched(data));
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(postsFetchingError(e.message));
    } else {
      dispatch(postsFetchingError('An unknown error occurred'));
    }
    throw e;
  }
};
