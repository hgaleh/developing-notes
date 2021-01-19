import { Button } from '../button/button';
import { HoverColor } from '../hoverable/hover-color';
import { HoverableLink } from '../hoverable/hoverable-link';
import { RoundButton } from '../round-button/round-button';
import { BellIcon } from '../svg/bell-icon';
import { DevIcon } from '../svg/dev-icon';
import { MessageIcon } from '../svg/message-icon';
import { Textbox } from '../textbox/textbox';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { Hamburger } from '../hamburger/hamburger';

export const Header = () => {
    return <header className={styles.headerClass}>
        <div className={styles.headerContainer}>
            <div className={styles.hamburger}>
                <Hamburger></Hamburger>
            </div>
            <HoverableLink hoverColor={HoverColor.gray} href="/detail/1">
                <div className={styles.buttonIcon}>
                    <DevIcon></DevIcon>
                </div>
            </HoverableLink>
            <div className={styles.textbox}>
                <Textbox></Textbox>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.button}>
                    <Button>Write a post</Button>
                </div>
                <div className={styles.icons}>
                    <RoundButton>
                        <MessageIcon></MessageIcon>
                    </RoundButton>
                    <RoundButton>
                        <BellIcon></BellIcon>
                    </RoundButton>
                </div>
                <div className={styles.hoverZone}>
                    <div className={styles.profile}>
                        <img src="./profile-photo.jpeg" alt="Hojjat Bakhtiyari Profile"></img>
                    </div>
                    <div role="menu">
                        <div>
                            <div className={`${styles.hoverable} ${styles.top}`}>
                                Hojjat Bakhtiyari
                                <div className={styles.userName}>
                                    @h.galeh
                                </div>
                            </div>
                        </div>
                        <div className={styles.options}>
                            <div className={styles.hoverable}>
                                <Link to="/detail/1">
                                    Dashboard
                                </Link>
                            </div>
                            <div className={styles.hoverable}>
                                <Link to="/detail/1">
                                    Write a post
                                </Link>
                            </div>
                            <div className={styles.hoverable}>
                                <Link to="/detail/1">
                                    Reading list
                                </Link>
                            </div>
                            <div className={styles.hoverable}>
                                <Link to="/detail/1">
                                    Settings
                                </Link>
                            </div>
                        </div>
                        <div className={styles.hoverable}>
                            Sign Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}