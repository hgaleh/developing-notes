import { ClickableIcon } from '../svg/clickable-icon';
import { FacebookIcon } from '../svg/facebook-icon';
import { GithubIcon } from '../svg/github-icon';
import { InstagramIcon } from '../svg/instagram-icon';
import { TwitterIcon } from '../svg/twitter-icon';
import styles from './footer.module.scss';

export const Footer = () => {
    return <footer>
        <div className={styles.footerContainer}>
            <nav>
                <a>Home</a>
                <a>Reading List</a>
                <a>Listings</a>
                <a>Podcasts</a>
                <a>Videos</a>
                <a>Tags</a>
                <a>Code of Conduct</a>
                <a>FAQ</a>
                <a>DEV</a>
                <a>Shop</a>
                <a>Sponsors</a>
                <a>About</a>
                <a>Privacy Policy</a>
                <a>Terms of use Contact</a>
                <div>
                    <ClickableIcon href="https://twitter.com/hgaleh">
                        <TwitterIcon></TwitterIcon>
                    </ClickableIcon>
                    <ClickableIcon href="https://www.facebook.com/hojjat.bkh">
                        <FacebookIcon></FacebookIcon>
                    </ClickableIcon>
                    <ClickableIcon href="https://github.com/hgaleh">
                        <GithubIcon></GithubIcon>
                    </ClickableIcon>
                    <ClickableIcon href="https://www.instagram.com/h.bakhtiyarikiya">
                        <InstagramIcon></InstagramIcon>
                    </ClickableIcon>
                </div>
            </nav>
            <hr></hr>
            <div className={styles.copyright}>
                Copyright © 2016 - 2021
            </div>
        </div>
    </footer>
}