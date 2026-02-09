import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/middleware/posts';
import { clearPosts } from '../../redux/reducers/postsSlice';
import type { AppDispatch, RootState } from '../../redux/reducers';

const ReduxPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list: posts, loading, error } = useSelector((state: RootState) => state.posts);

  const onClickFetch = () => {
    dispatch(fetchPosts());
  };

  const onClickClear = () => {
    dispatch(clearPosts());
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <button onClick={onClickFetch}>Fetch Posts</button>
      <button onClick={onClickClear}>Clear Posts</button>
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReduxPage;
