import React, {useContext, useState} from 'react';
import {BasketContext} from '../../../App';
import {BasketItem} from '../../../interfaces/BasketItem';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import classes from './TrElement.module.css';

interface Props {
    index: number,
    product: BasketItem
}

const TrElement = (props: Props) => {
    const basketCtx = useContext(BasketContext);
    const [inputAmount, setInputAmount] = useState<number>(props.product.amount);


    const updateBasket = (amount: number) => {
        if (basketCtx) {
            basketCtx.setBasket((prev: any) => {
                const notUpdated = prev.filter((el: BasketItem) => el.id !== props.product.id);
                return [...notUpdated, {
                    id: props.product.id,
                    name: props.product.name,
                    price: props.product.price,
                    amount: amount,
                }]
            })
        }
    }

    const inputOnChangeHandler = (e: any) => {
        if (e.target.value <= 1) {
            setInputAmount(Number(1));
            updateBasket(Number(1))
        } else if (e.target.value >= 99) {
            setInputAmount(Number(99));
            updateBasket(Number(99))

        } else {
            setInputAmount(Math.floor(Number(e.target.value)));
            updateBasket(Math.floor(Number(e.target.value)))
        }
    }

    const deleteProductHandler = () => {
        updateBasket(0);
    }

    return (
        <tr>
            <td className={classes['td-index']}>{props.index + 1}.</td>
            <td data-label="name">{props.product.name}</td>
            <td data-label="amount" className={classes['td-amount']}>
                <input value={String(inputAmount)} type="number" min="1" max="99" onChange={inputOnChangeHandler}/>
                <div className={classes['trash-icon']} onClick={() => deleteProductHandler()}>
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            </td>
            <td data-label="price" className={classes['td-price']}>{props.product.price}$</td>
            <td data-label="sum" className={classes['td-sum']}>{inputAmount * props.product.price}$</td>
        </tr>
    );
}

export {TrElement}