import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key = { item.id } data = { item }/>)
                }
            </div>

                {
                    state.itemsCounter >= 1 && 
                    <div>
                        <p><span>Total Items:</span> {state.itemsCounter}</p>
                        <p><span>Total Payments:</span> {state.total}</p>
                        <div>
                            <button onClick={()=>dispatch({type:'CHECKOUT'})}>Check Out</button>
                            <button onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
                        </div>
                    </div>
                }

                {
                    state.checkOut && <div>
                       <h3>Check Out Successfully</h3> 
                       <Link to='/products'>Buy More</Link>
                    </div>
                }

                {
                    !state.checkOut && state.itemsCounter === 0 && <div>
                       <h3>Want to Bye?</h3> 
                       <Link to='/products'>Go Back Shop</Link>
                    </div>
                }
            
        </div>
        
    );
};

export default ShopCart;