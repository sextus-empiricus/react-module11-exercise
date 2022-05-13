import React, {useContext, useEffect, useState} from 'react';

import {BasketContext} from '../../App';
import {Button} from '../UI/Buttons/Button/Button';
import {TrElement} from './TrElement/TrElement';

import classes from './Basket.module.css';

interface Props {
    showBasketToggle: () => void;
}

const Basket = (props: Props) => {
    const basketCtx = useContext(BasketContext);
    const [showTable, setShowTable] = useState<boolean>(false);
    const [basketSummary, setBasketSummary] = useState<number>(0);

    useEffect(() => {
        if (basketCtx) {
            const itemsInBasket = basketCtx.basket.filter(el => el.amount !== 0)
            if (itemsInBasket[0]) {
                setShowTable(true)
            }
            setBasketSummary(0);
            itemsInBasket.forEach(el => setBasketSummary(prev => prev + el.price * el.amount))
        }
    }, [basketCtx])

    return <>
        <div className={classes.backdrop}>
            <div className={classes.basket}>

                <div className={classes.bar}>
                    <p>Your order:</p>
                    <div className={classes['close-button']}
                         onClick={() => props.showBasketToggle()}
                    >X
                    </div>
                </div>

                <div className={classes['scrollbar-wrapper']}>
                    {
                        showTable ?
                            <table className={classes.table}>
                                <thead>
                                <tr>
                                    <th className={classes['th-index']}></th>
                                    <th className={classes['th-name']}>name</th>
                                    <th>amount</th>
                                    <th>price</th>
                                    <th className={classes['th-sum']}>sum</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    basketCtx &&
                                    basketCtx.basket
                                        .filter(el => el.amount !== 0)
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((el, index) =>
                                            <TrElement key={el.id}
                                                       product={el}
                                                       index={index}
                                            />)
                                }
                                </tbody>

                            </table>
                            : <p style={{textAlign: 'center', marginTop: '30px'}}>Please add products to your basket</p>
                    }


                </div>

                {
                    showTable &&
                    <div className={classes['order-button-wrapper']}>
                        <h3>summary: {basketSummary}$</h3>
                        <Button actionHandler={() => console.log('click')}>Order</Button>
                    </div>
                }


            </div>
        </div>
    </>

}

export {Basket}
