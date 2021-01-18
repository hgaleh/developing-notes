import styles from './social-networks.module.scss';
import { CakeIcon } from '../svg/cake-icon';
import { GithubIcon } from '../svg/github-icon';
import { LinkedinIcon } from '../svg/linkedin-icon';
import { LocationIcon } from '../svg/location-icon';
import { LinkIcon } from '../link-icon/link-icon';

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
            <LinkIcon href="https://github.com/hgaleh">
                <GithubIcon></GithubIcon>
            </LinkIcon>
            <LinkIcon href="https://www.linkedin.com/in/hojjatollah-bakhtiyari-kiya-391009100/">
                <LinkedinIcon></LinkedinIcon>
            </LinkIcon>
        </span>
    </div>
}