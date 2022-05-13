import React from 'react';
import {ButtonControls} from '../Buttons/ButtonControls/ButtonControls';
import classes from './InputAmount.module.css';

interface Props {
    controlHandler: any,
    value: any
    inputOnChangeHandler: any
}

const InputAmount = (props: Props) => {
    return (

        <label className={classes['item-label']}>
            <ButtonControls controlHandler={props.controlHandler}
                            controlType="dec"
            >-
            </ButtonControls>

            <input type="number"
                   min="0"
                   max="99"
                   step="1"
                   value={String(props.value)}
                   onChange={props.inputOnChangeHandler}/>

            <ButtonControls
                controlHandler={props.controlHandler}
                controlType="inc"
            >+
            </ButtonControls>
        </label>

    );
}

export {InputAmount}