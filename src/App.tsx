import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import {BasketItem} from '../interfaces/BasketItem';
import {Header} from './components/Header/Header';
import {Shop} from './components/Shop/Shop';
import {Basket} from './components/Basket/Basket';
import {Footer} from './common/Footer';

import {items} from './utils/dummy-items';
import classes from './App.module.css';

const BasketContext = createContext<{ basket: BasketItem[]; setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>> } | null>(null);

const App = () => {
  const [showBasket, setShowBasket] = useState<boolean>(false);
  const [basket, setBasket] = useState<BasketItem[]>(items.map(el => ({
    id: el.id,
    name: el.name,
    amount: 0,
    price: el.price
  })));

  const value = {basket, setBasket};

  const showBasketToggle = () => {
    setShowBasket(prev => !prev)
  }

  return <>
    <BasketContext.Provider value={value}>
      <div className={`${classes.App} ${showBasket && classes['blocked-styles']}`}>
        {
            showBasket && ReactDOM.createPortal(
                <Basket
                    showBasketToggle={showBasketToggle}/>,
                document.getElementById('basket') as HTMLElement)
        }
        <Header showBasketToggle={showBasketToggle}/>
        <Shop/>
      </div>
    </BasketContext.Provider>
    <Footer></Footer>
  </>
};

export {App, BasketContext};
