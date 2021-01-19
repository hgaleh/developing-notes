import { Button } from '../button/button';
import { HoverColor } from '../hoverable/hover-color';
import { HoverableLink } from '../hoverable/hoverable-link';
import { RoundButton } from '../round-button/round-button';
import { BellIcon } from '../svg/bell-icon';
import { DevIcon } from '../svg/dev-icon';
import { MessageIcon } from '../svg/message-icon';
import { Textbox } from '../textbox/textbox';
import styles from './header.module.scss';

export const Header = () => {
    return <header className={styles.headerClass}>
        <div className={styles.headerContainer}>
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
                        <img src="./profile-photo.jpeg"></img>
                    </div>
                    <div role="menu">
                        <div>
                            Hojjat Bakhtiyari
                        <div>
                                @h.galeh
                        </div>
                        </div>
                        <hr></hr>
                        <div>
                            Dashboard
                    </div>
                        <div>
                            Write a post
                    </div>
                        <div>
                            Reading list
                    </div>
                        <div>
                            Settings
                    </div>
                        <hr></hr>
                        <div>
                            Sign Out
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}