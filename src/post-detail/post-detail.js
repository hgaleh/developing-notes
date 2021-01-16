import styles from './post-detail.module.scss';

export const PostDetail = () => {
    return <div className={styles.postDetail}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="./profile-photo.jpeg" alt="rwparrish profile"></img>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.writerName}>
                    rwparrish
                </div>
                <div className={styles.publishDate}>
                    Jan 9
                </div>
            </div>
        </div>
        <div className={styles.body}>
            <h3 className={styles.title}>
                <a href="#">
                    Changing sate before saving to the database in Rails
                </a>
            </h3>
            <p className={styles.brief}>
                Changing sate before saving to the database in RailsChanging
                sate before saving to the database in Rails
                Changing sate before saving to the database in Rails
            </p>
        </div>
    </div>;
}