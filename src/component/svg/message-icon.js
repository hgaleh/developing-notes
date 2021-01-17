import styles from './svg.module.scss';

export const MessageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={styles.colorOfParent} width="24" height="24"
            viewBox="0 0 24 24" role="img" aria-labelledby="ailoyz0ltoamjvc3yanyj1s9ob98afy2">
            <title id="ailoyz0ltoamjvc3yanyj1s9ob98afy2">Connect</title>
            <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
        </svg>
    );
}