import { Button } from '../button/button';
import { HoverColor } from '../hoverable/hover-color';
import { HoverableLink } from '../hoverable/hoverable-link';
import { DevIcon } from '../svg/dev-icon';
import { Textbox } from '../textbox/textbox';
import styles from './header.module.scss';

export const Header = () => {
    return <header className={styles.headerClass}>
        <div className={styles.innerContainer}>
            <HoverableLink hoverColor={HoverColor.gray} href="/detail/1">
                <div className={styles.buttonIcon}>
                    <DevIcon></DevIcon>
                </div>
            </HoverableLink>
            <Textbox></Textbox>
            <div className={styles.button}>
                <Button>Write a post</Button>
            </div>
        </div>
    </header>
}