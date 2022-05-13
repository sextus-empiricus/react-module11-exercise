import React from 'react';
import classes from './Header.module.css';
import {Hero} from './Hero/Hero';
import {Bar} from './Bar/Bar';
import {BasketButton} from './BasketButton/BasketButton';

interface Props {
    showBasketToggle: () => void;
}

const Header = (props: Props) => {

    return (
        <div className={classes.header}>
            <Bar>
                <h1>ReactGreek</h1>
                <BasketButton action={props.showBasketToggle}/>
            </Bar>
            <Hero/>
        </div>
    );
}

export {Header}
