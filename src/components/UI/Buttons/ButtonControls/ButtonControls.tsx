import React, {ReactNode} from 'react';

import classes from './ButtonControls.module.css';

interface Props {
    children: ReactNode;
    controlHandler: React.Dispatch<React.SetStateAction<number>>;
    controlType: 'inc' | 'dec',
}

const ButtonControls = (props: Props) => {
    const action = (type: 'inc' | 'dec') => {
        if (type === 'inc') {
            props.controlHandler((prev: any) => {
                if (prev >= 99) {
                    return 99
                } else {
                    return prev + 1
                }
            })
        }
        if (type === 'dec') {
            props.controlHandler((prev: any) => {
                if (prev <= 0) {
                    return 0
                } else {
                    return prev - 1
                }
            })
        }
    }

    return <div className={classes['button-controls']}
                onClick={() => action(props.controlType)}
    >
        {props.children}
    </div>
};

export {ButtonControls}