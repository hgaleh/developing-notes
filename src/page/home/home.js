import { Profile } from '../../component/profile/profile';
import { PostBrief } from '../../component/post-brief/post-brief';
import styles from './home.module.scss';

export const Home = () => {
    return <div className={styles['app-container']}>
    <div className={styles['page-content']}>
        <Profile></Profile>
        <div className={styles['post-list']}>
          <PostBrief id="1"></PostBrief>
          <PostBrief id="2"></PostBrief>
          <PostBrief id="3"></PostBrief>
          <PostBrief id="4"></PostBrief>
          <PostBrief id="5"></PostBrief>
          <PostBrief id="6"></PostBrief>
          <PostBrief id="7"></PostBrief>
          <PostBrief id="8"></PostBrief>
          <PostBrief id="9"></PostBrief>
          <PostBrief id="10"></PostBrief>
          <PostBrief id="11"></PostBrief>
          <PostBrief id="12"></PostBrief>
          <PostBrief id="13"></PostBrief>
          <PostBrief id="14"></PostBrief>
        </div>
      </div>
    </div>
}