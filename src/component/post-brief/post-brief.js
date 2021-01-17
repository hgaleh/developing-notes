import styles from './post-brief.module.scss';
import { HoverableLink } from '../hoverable/hoverable-link';
import { HoverColor } from '../hoverable/hover-color';

export const PostBrief = (props) => {
    return <div className={styles.postDetail}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="./profile-photo.jpeg" alt="Hojjat Bakhtiyari Profile"></img>
            </div>
            <div className={styles.headerRight}>
                <HoverableLink href={'/detail/1'} hoverColor={HoverColor.white}>
                    <div className={styles.writerName}>
                        Hojjat Bakhtiyari
                    </div>
                </HoverableLink>
                <HoverableLink href={'/detail/1'} hoverColor={HoverColor.white}>
                    <div className={styles.publishDate}>
                        Jan 9
                    </div>
                </HoverableLink>
            </div>
        </div>
        <div className={styles.body}>
            <h3 className={styles.title}>
                <HoverableLink href={`/detail/${props.id}`}>
                    Changing sate before saving to the database in Rails
                </HoverableLink>
            </h3>
            <p className={styles.brief}>
                Changing sate before saving to the database in RailsChanging
                sate before saving to the database in Rails
                Changing sate before saving to the database in Rails
            </p>
        </div>
    </div>;
}