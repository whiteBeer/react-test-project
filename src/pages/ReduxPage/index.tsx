import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/posts/postsThunk';
import { clearPosts } from '../../redux/posts/postsSlice';
import { selectPosts, selectPostsLoading, selectPostsError } from '../../redux/posts/postsSelector';
import type { AppDispatch } from '../../redux/store';

const ReduxPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  const onClickFetch = async () => {
    try {
      const fetchedPosts = await dispatch(fetchPosts());
      console.log('Posts fetched successfully!', fetchedPosts);
    } catch (e) {
      alert('Failed to fetch posts.');
      console.error(e);
    }
  };

  const onClickClear = () => {
    dispatch(clearPosts());
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <button onClick={onClickFetch} disabled={loading}>Fetch Posts</button>
      <button onClick={onClickClear} disabled={loading}>Clear Posts</button>
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
