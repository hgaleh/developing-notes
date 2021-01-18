import styles from './link-icon.module.scss';

export const LinkIcon = (props) => {
    return <a className={styles.clickable} href={props.href} target="_blank" rel="noreferrer">
            {props.children}
    </a>
}