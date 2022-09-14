import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Product from './shared/Product';
const Store = () => {
    const products = useContext(ProductsContext);


    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {
                products.map(product => <Product 
                                            key={product.id} 
                                            productData = {product}
                                        />)
            }
        </div>
    );
};

export default Store;