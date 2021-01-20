import styles from './round-button.module.scss';

export const RoundButton = (props) => {
    return (
        <div className={styles.roundButton} onClick={props.onClick}>
            {props.children}
        </div>
    );
};