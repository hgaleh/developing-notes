import { Profile } from '../../component/profile/profile';
import { PostBrief } from '../../component/post-brief/post-brief';
import styles from './home.module.scss';

export const Home = () => {
    return <div className={styles['page-content']}>
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
}