import styles from './social-networks.module.scss';
import { CakeIcon } from '../svg/cake-icon';
import { GithubIcon } from '../svg/github-icon';
import { LinkedinIcon } from '../svg/linkedin-icon';
import { LocationIcon } from '../svg/location-icon';
import { ClickableIcon } from '../svg/clickable-icon';

export const SocialNetworks = () => {
    return <div className={styles['social-network']}>
        <span>
            <LocationIcon></LocationIcon>
            Tehran, Iran
        </span>
        <span>
            <CakeIcon></CakeIcon>
                Joined on&nbsp;
            <time dateTime="2020-08-23T02:33:50Z">Aug 23, 2020</time>
        </span>
        <span>
            <ClickableIcon href="https://github.com/hgaleh">
                <GithubIcon></GithubIcon>
            </ClickableIcon>
            <ClickableIcon href="https://www.linkedin.com/in/hojjatollah-bakhtiyari-kiya-391009100/">
                <LinkedinIcon></LinkedinIcon>
            </ClickableIcon>
        </span>
    </div>
}