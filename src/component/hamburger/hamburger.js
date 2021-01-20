import { HamburgerIcon } from '../svg/hamburger-icon';
import styles from './hamburger.module.scss';
import React from 'react';
import { RoundButton } from '../round-button/round-button';

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
                    <div className={styles.menu}></div>
                    <div className={styles.out} onClick={this.clickedOutside}></div>
                </div>
            </div>
        )
    }
}