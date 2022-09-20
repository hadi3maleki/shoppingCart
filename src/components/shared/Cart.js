import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { shorten } from '../../helper/functions';
import trashIcon from '../../assets/icons/trash.svg'
const Cart = (props) => {
    const {image, title, price, quantity} = props.data;
    const {dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                <img src = {image} alt = 'product'/>
                <div>
                    <h3>{shorten(title)}</h3>
                    <p>{price} $</p>
                </div>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ? <button onClick={()=>dispatch({ type:"DECREASE", payload: props.data })}>-</button>:
                    <button onClick={()=>dispatch({ type:"REMOVE_ITEM", payload: props.data })}><img src= {trashIcon} style = {{width:'20px'}}/></button>
                }
                {
                    <button onClick={()=>dispatch({ type:"INCREASE", payload: props.data })}>+</button>
                }
            </div>
        </div>
    );
};

export default Cart;