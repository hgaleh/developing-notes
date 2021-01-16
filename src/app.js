import styles from './app.module.scss';
import { Profile } from './profile/profile';
import { Post } from './post/post';

function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['page-content']}>
        <Profile></Profile>
        <div className={styles['post-list']}>
          <Post></Post>
        </div>
      </div>
    </div>
  );
}

export default App;
