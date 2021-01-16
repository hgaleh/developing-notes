import { SocialNetworks } from '../social-networks/social-networks';
import styles from './profile.module.scss';

export const Profile = () => {
    return <div className={styles.profile}>
    <div className={styles['profile-top']}>
      <div className={styles['profile-photo']}>
        <img src="./profile-photo.jpeg" alt="rwparrish profile">
        </img>
      </div>
      <div className={styles['follow-me']}>
        <button>Follow</button>
      </div>
    </div>
    <div className={styles['profile-middle']}>
      <div className={styles['my-name']}>rwparrish</div>
      <div className={styles['comment']}>
        To code or not to code, that is the ternary.
      </div>
      <div className={styles['social-networks']}>
        <SocialNetworks></SocialNetworks>
      </div>
    </div>
    <div className={styles['profile-bottom']}>
        <div>Work</div>
        <div>
          Full-Stack Software Engineer
        </div>
    </div>
  </div>
};