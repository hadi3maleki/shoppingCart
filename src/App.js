import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
//context
import ProductsContextProvider from './context/ProductsContextProvider';

//components
import Store from './components/Store';
import ProductsDetails from './components/shared/ProductsDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
          <Route path= "/products/:id" element = {<ProductsDetails/>}/>
            <Route path= "/products" element = {<Store/>}/>
            <Route path= "/cart" element = {<ShopCart/>}/>
            <Route path = "/*" element = {<Navigate to="/products"/>} />
          </Routes>
        </CartContextProvider>

      </ProductsContextProvider>
    </div>
  );
};

export default App;