import styles from './round-button.module.scss';

export const RoundButton = (props) => {
    return (
        <div className={styles.roundButton}>
            {props.children}
        </div>
    );
};