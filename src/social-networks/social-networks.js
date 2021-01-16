import styles from './social-networks.module.scss';
import { CakeIcon } from '../svg/cake-icon';
import { GithubIcon } from '../svg/github-icon';
import { LinkedinIcon } from '../svg/linkedin-icon';
import { LocationIcon } from '../svg/location-icon';

export const SocialNetworks = () => {
    return <div className={styles['social-network']}>
        <span>
            <LocationIcon></LocationIcon>
            Colorado Springs, CO
        </span>
        <span>
            <CakeIcon></CakeIcon>
                Joined on&nbsp;
            <time dateTime="2020-08-23T02:33:50Z">Aug 23, 2020</time>
        </span>
        <span>
            <a href="https://github.com/rwparrish" target="_blank" rel="noopener me">
                <GithubIcon></GithubIcon>
            </a>
            <a href="https://www.linkedin.com/in/rwparrish/" target="_blank" rel="noopener me">
                <LinkedinIcon></LinkedinIcon>
            </a>
        </span>
    </div>
}