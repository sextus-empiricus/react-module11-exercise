import React from 'react';
import {items} from '../../utils/dummy-items';
import {Item} from './Item/Item';
import {BoxTextured} from '../common/BoxTextured/BoxTextured';

const Shop = () => {
    return (
        <BoxTextured>
            {items.map(el => <Item key={el.id} item={el}></Item>)}
        </BoxTextured>
    );
}

export {Shop}