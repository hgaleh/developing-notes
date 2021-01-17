import { HoverColor } from '../hoverable/hover-color';
import { HoverableLink } from '../hoverable/hoverable-link';
import { DevIcon } from '../svg/dev-icon';
import styles from './header.module.scss';

export const Header = () => {
    return <header className={styles.headerClass}>
        <div className={styles.innerContainer}>
            <HoverableLink hoverColor={HoverColor.gray} href="/detail/1">
                <div className={styles.buttonIcon}>
                    <DevIcon></DevIcon>
                </div>
            </HoverableLink>
        </div>
    </header>
}