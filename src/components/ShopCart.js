import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <div>
            {state.selectedItems.map(item => <Cart key = { item.id } data = { item }/>)}
        </div>
        
    );
};

export default ShopCart;