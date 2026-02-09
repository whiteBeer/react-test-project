import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
export default usersReducer;
