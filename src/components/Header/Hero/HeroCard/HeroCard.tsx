import React from 'react';
import {heroCardDesc1, heroCardDesc2} from '../../../../utils/hero-content';
import classes from './HeroCard.module.css';

const HeroCard = () => {

    return (
        <div className={classes['hero-card']}>
            <h2>Greek dummy stuff from us to you!</h2>
            <p>{heroCardDesc1}</p>
            <p>{heroCardDesc2}</p>
        </div>

    );
}

export {HeroCard}