import React from 'react';

import classes from './Button.module.css';

interface Props {
    children: React.ReactNode
    actionHandler: () => void;
}

const Button = (props: Props) => {

    return <button className={classes.button}
                   onClick={props.actionHandler}
    >{props.children}
    </button>
};

export {Button}