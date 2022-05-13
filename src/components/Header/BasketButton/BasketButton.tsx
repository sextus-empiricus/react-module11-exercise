import React, {useContext, useEffect, useState} from 'react';
import {BasketItem} from '../../../interfaces/BasketItem';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import {BasketContext} from '../../../App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import classes from './BasketButton.module.css';

interface Props {
    action: ()=>void;
}

const BasketButton = (props: Props) => {
    const basketCtx = useContext(BasketContext);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (basketCtx) {
            let sum = 0;
            basketCtx.basket.forEach((el: BasketItem) => (sum) += Number(el.amount))
            setSum(sum);
        }
    }, [basketCtx])

    return (

        <div className={classes['basket-button']}
             onClick={() => props.action()}>
            <FontAwesomeIcon icon={faCartShopping}/>
            <p>Your Card</p>
            <span>{sum}</span>
        </div>

    );
}

export {BasketButton}