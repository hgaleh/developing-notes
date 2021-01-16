import styles from './app.module.scss';
import { Profile } from './profile/profile';
import { PostBrief } from './post-brief/post-brief';
import { Footer } from './footer/footer';

function App() {
  return (
    <div className={styles['app-container']}>
      <div className={styles['page-content']}>
        <Profile></Profile>
        <div className={styles['post-list']}>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
          <PostBrief></PostBrief>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
