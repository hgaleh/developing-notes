import styles from './post-brief.module.scss';
import { Link } from 'react-router-dom';

export const PostBrief = (props) => {
    return <div className={styles.postDetail}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="./profile-photo.jpeg" alt="Hojjat Bakhtiyari Profile"></img>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.writerName}>
                    Hojjat Bakhtiyari
                </div>
                <div className={styles.publishDate}>
                    Jan 9
                </div>
            </div>
        </div>
        <div className={styles.body}>
            <h3 className={styles.title}>
                <Link to={`/detail/${props.id}`}>
                    Changing sate before saving to the database in Rails
                </Link>
            </h3>
            <p className={styles.brief}>
                Changing sate before saving to the database in RailsChanging
                sate before saving to the database in Rails
                Changing sate before saving to the database in Rails
            </p>
        </div>
    </div>;
}