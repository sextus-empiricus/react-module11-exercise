import React, {ReactNode} from 'react';

import classes from './BoxTextured.module.css';

interface Props {
    children: ReactNode
}

const BoxTextured = (props: Props) => {

    return (

        <div className={classes.box}>{props.children}</div>

    );
}

export {BoxTextured}