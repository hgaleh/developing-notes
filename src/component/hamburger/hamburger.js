import { HamburgerIcon } from '../svg/hamburger-icon';
import styles from './hamburger.module.scss';
import React from 'react';
import { RoundButton } from '../round-button/round-button';
import { CloseIcon } from '../svg/close-icon';
import { HoverableLink } from '../hoverable/hoverable-link';
import { HomeIcon } from '../svg/home';
import { ReadingListIcon } from '../svg/reading-list-icon';
import { ListingsIcon } from '../svg/listings-icon';
import { PodcastsIcon } from '../svg/podcasts-icon';
import { VideosIcon } from '../svg/videsos-icon';
import { TagsIcon } from '../svg/tags-icon';

export class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.setState({show: false});
        this.hamburgerClicked = this.hamburgerClicked.bind(this);
        this.clickedOutside = this.clickedOutside.bind(this);
    }

    hamburgerClicked() {
        this.setState({show: true});
    }

    clickedOutside() {
        this.setState({show: false});
    }

    render() {
        return (
            <div className={styles.hamburgerButton}>
                <RoundButton>
                    <HamburgerIcon onClick={this.hamburgerClicked}></HamburgerIcon>
                </RoundButton>
                <div style={{display: (this.state && this.state.show) ? 'block' : 'none'}} className={styles.hamburgerContainer}>
                    <div className={styles.menu}>
                        <div className={styles.header}>
                            <h2>
                                Dev Comunity
                            </h2>
                            <RoundButton onClick={this.clickedOutside}>
                                <CloseIcon></CloseIcon>
                            </RoundButton>
                        </div>

                        <div className={styles.body}>
                            <ul>
                                <li><HoverableLink href=''><i><HomeIcon></HomeIcon></i>Home</HoverableLink></li>
                                <li><HoverableLink href=''><i><ReadingListIcon></ReadingListIcon></i>Reading List</HoverableLink></li>
                                <li><HoverableLink href=''><i><ListingsIcon></ListingsIcon></i>Listings</HoverableLink></li>
                                <li><HoverableLink href=''><i><PodcastsIcon></PodcastsIcon></i>Podcasts</HoverableLink></li>
                                <li><HoverableLink href=''><i><VideosIcon></VideosIcon></i>Videos</HoverableLink></li>
                                <li><HoverableLink href=''><i><TagsIcon></TagsIcon></i>Tags</HoverableLink></li>
                                <li><HoverableLink href=''>More...</HoverableLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.out} onClick={this.clickedOutside}></div>
                </div>
            </div>
        )
    }
}