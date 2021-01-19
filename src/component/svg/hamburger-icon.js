import styles from './svg.module.scss';

export const HamburgerIcon = (props) => {
    return <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} className={styles.colorOfParent} width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ahnddvgwroyi7gm8ok1vlos6wcl865pf"><title id="ahnddvgwroyi7gm8ok1vlos6wcl865pf">Navigation menu</title>
        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
    </svg>;
};