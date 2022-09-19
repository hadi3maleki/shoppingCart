import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
          <Switch>
          <Route path= "/products/:id" component={ProductsDetails}/>
            <Route path= "/products" component={Store}/>
            <Route path= "/cart" component={ShopCart}/>
            <Redirect to = "/products"/>
          </Switch>
        </CartContextProvider>

      </ProductsContextProvider>
    </div>
  );
};

export default App;