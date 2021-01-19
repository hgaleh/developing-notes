import { HamburgerIcon } from '../svg/hamburger-icon';
import styles from './hamburger.module.scss';
import React from 'react';

export class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.setState({show: false});
        this.hamburgerClicked = this.hamburgerClicked.bind(this);
    }

    hamburgerClicked() {
        this.setState({show: true});
        console.log('clicked');
    }

    render() {
        return (
            <div className={styles.hamburgerButton}>
                <HamburgerIcon onClick={this.hamburgerClicked}></HamburgerIcon>
                <div style={{display: (this.state && this.state.show) ? 'block' : 'none'}} className={styles.hamburgerContainer}>
                    <div className={styles.menu}></div>
                </div>
            </div>
        )
    }
}