import styles from './button.module.scss';

export const Button = (props) => {
    return <button className={styles.buttonContainer}>{props.children}</button>;
}
