import styles from './app.module.scss';
import { Profile } from './profile/profile';
import { PostDetail } from './post-detail/post-detail';

function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['page-content']}>
        <Profile></Profile>
        <div className={styles['post-list']}>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
          <PostDetail></PostDetail>
        </div>
      </div>
    </div>
  );
}

export default App;
