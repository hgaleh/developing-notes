import styles from './clickable-icon.module.scss';

export const ClickableIcon = (props) => {
    return <a className={styles.clickable} href={props.href} target="_blank" rel="noreferrer">
            {props.children}
    </a>
}