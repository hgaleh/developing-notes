import { Link } from 'react-router-dom';
import { HoverColor } from './hover-color';

export const HoverableLink = (props) => {
    const { href, children, hoverColor } = props;
    return <Link to={ href } className={StyleSheet.title}
        data-hover-color={ hoverColor ? hoverColor : HoverColor.blue }>
            { children }
        </Link>
};