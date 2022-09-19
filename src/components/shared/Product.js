import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shorten, isInCart } from '../../helper/functions';

import { CartContext } from '../../context/CartContextProvider';

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
            <img src={productData.image} alt = 'product' style={{width: "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detaile</Link>
                <div>
                    {
                        isInCart(state, productData.id) ? 
                        <button onClick={()=>dispatch({type:"INCREASE", payload: productData})}> + </button>
                        :
                        <button onClick={()=>dispatch({type:"ADD_ITEM", payload: productData})}> Add to cart </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;