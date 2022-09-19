import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContextProvider';

import shopIcon from '../../assets/icons/shop.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div>
            <div>
                <Link to='/products'>Products</Link>
                <div>
                    <Link to='/cart'>
                        <img src={shopIcon} alt='shop' />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;