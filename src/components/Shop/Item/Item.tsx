import React, {useContext, useState} from 'react';
import {ItemShop} from '../../../interfaces/ItemShop';
import {BasketItem} from '../../../interfaces/BasketItem';
import {BasketContext} from '../../../App';
import {Button} from '../../UI/Buttons/Button/Button';
import {InputAmount} from '../../UI/InputAmount/InputAmount';

import classes from './Item.module.css';

interface Props {
    item: ItemShop;
}

const Item = ({item}: Props) => {
    const [amount, setAmount] = useState<number>(0);
    const basketCtx = useContext(BasketContext);

    const inputOnChangeHandler = (e: any) => {
        if (e.target.value <= 0) {
            setAmount(Number(0));
        } else if (e.target.value >= 99) {
            setAmount(Number(99));
        } else {
            setAmount(Math.floor(Number(e.target.value)));
        }
    }

    const submitHandler = () => {
        if (basketCtx) {
            basketCtx.setBasket((prev: any) => {
                setAmount(0);
                const notUpdated = prev.filter((el: BasketItem) => el.id !== item.id);
                const updated = prev.find((el: BasketItem) => el.id === item.id);
                return [...notUpdated, {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    amount: updated.amount + amount
                }]
            })
        }
    }

    return (
        <div className={classes.item}>
            <div className={classes['item-info']}>
                <p className={classes['item-name']}>{item.name}</p>
                <p className={classes['item-description']}>{item.description}</p>
                <p className={classes['item-price']}>{item.price}$</p>
            </div>

            <div className={classes['item-controls']}>
                <InputAmount controlHandler={setAmount}
                             value={String(amount)}
                             inputOnChangeHandler={inputOnChangeHandler}
                />
                <Button actionHandler={submitHandler}>+Add</Button>
            </div>
        </div>
    );
}

export {Item}