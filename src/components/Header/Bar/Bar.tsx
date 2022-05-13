import React, {ReactNode} from 'react';

import classes from './Bar.module.css';

interface Props {
    children?: ReactNode;
    style?: any,
}
const Bar = (props: Props) => {
    return (
        <div className={classes.Bar} style={props.style}>
            {props.children}
        </div>
    );
}

export {Bar}