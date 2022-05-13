import React from 'react';

import {HeroCard} from './HeroCard/HeroCard';

import classes from './Hero.module.css';

const Hero = () => {
    return <>
        <div className={classes['hero-shadow']}></div>
        <div className={classes.hero}>
            <h2 className={classes['hero-title-mobile']}>Greek dummy stuff from us to you!</h2>
        </div>
        <div className={classes['hero-bottom']}>
            <HeroCard/>
        </div>
    </>
}

export {Hero}