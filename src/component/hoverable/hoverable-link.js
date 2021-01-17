import { Link } from 'react-router-dom';
import { HoverColor } from './hover-color';
import styles from './hoverable-link.module.scss';
import React from 'react';


export class HoverableLink extends React.Component {

    constructor(props) {
        super(props);
        this.onEnterd = this.onEnterd.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }

    onEnterd() {
        this.setState({ color: this.props.hoverColor ? this.props.hoverColor : HoverColor.blue });
    }

    onLeave() {
        this.setState({ color: 'unset' });
    }

    render() {
        return <Link to={this.props.href} className={styles.title} onMouseEnter={this.onEnterd}
            onMouseLeave={this.onLeave}
            style={this.state}>
            {this.props.children}
        </Link>
    }
}