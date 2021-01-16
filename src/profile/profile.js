import { SocialNetworks } from '../social-networks/social-networks';
import styles from './profile.module.scss';

export const Profile = () => {
    return <div className={styles.profile}>
    <div className={styles['profile-top']}>
      <div className={styles['profile-photo']}>
        <img src="./profile-photo.jpeg" alt="Hojjat Bakhtiyari Profile">
        </img>
      </div>
      <div className={styles['follow-me']}>
        <button>Follow</button>
      </div>
    </div>
    <div className={styles['profile-middle']}>
      <div className={styles['my-name']}>Hojjat Bakhtiyari</div>
      <div className={styles['comment']}>
        Frontend | Angular | React Developer
      </div>
      <div className={styles['social-networks']}>
        <SocialNetworks></SocialNetworks>
      </div>
    </div>
    <div className={styles['profile-bottom']}>
        <div>Work</div>
        <div>
          Frontend developer at National Iranian Copper Industries Co.
        </div>
    </div>
  </div>
};