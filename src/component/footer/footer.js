import { LinkIcon } from '../link-icon/link-icon';
import { FacebookIcon } from '../svg/facebook-icon';
import { GithubIcon } from '../svg/github-icon';
import { InstagramIcon } from '../svg/instagram-icon';
import { TwitterIcon } from '../svg/twitter-icon';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return <footer>
        <div className={styles.footerContainer}>
            <nav>
                <Link to="/">Home</Link>
                <a href="https://twitter.com/hgaleh">Reading List</a>
                <a href="https://twitter.com/hgaleh">Listings</a>
                <a href="https://twitter.com/hgaleh">Podcasts</a>
                <a href="https://twitter.com/hgaleh">Videos</a>
                <a href="https://twitter.com/hgaleh">Tags</a>
                <a href="https://twitter.com/hgaleh">Code of Conduct</a>
                <a href="https://twitter.com/hgaleh">FAQ</a>
                <a href="https://twitter.com/hgaleh">DEV</a>
                <a href="https://twitter.com/hgaleh">Shop</a>
                <a href="https://twitter.com/hgaleh">Sponsors</a>
                <a href="https://twitter.com/hgaleh">About</a>
                <a href="https://twitter.com/hgaleh">Privacy Policy</a>
                <a href="https://twitter.com/hgaleh">Terms of use Contact</a>
                <div>
                    <LinkIcon href="https://twitter.com/hgaleh">
                        <TwitterIcon></TwitterIcon>
                    </LinkIcon>
                    <LinkIcon href="https://www.facebook.com/hojjat.bkh">
                        <FacebookIcon></FacebookIcon>
                    </LinkIcon>
                    <LinkIcon href="https://github.com/hgaleh">
                        <GithubIcon></GithubIcon>
                    </LinkIcon>
                    <LinkIcon href="https://www.instagram.com/h.bakhtiyarikiya">
                        <InstagramIcon></InstagramIcon>
                    </LinkIcon>
                </div>
            </nav>
            <hr></hr>
            <div className={styles.copyright}>
                Copyright © 2016 - 2021
            </div>
        </div>
    </footer>
}