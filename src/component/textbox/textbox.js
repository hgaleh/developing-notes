import styles from './textbox.module.scss';

export const Textbox = () => {
    return <input className={styles.textbox} type="text" name="q"
    placeholder="Search..." autocomplete="off" aria-label="search"></input>;
};