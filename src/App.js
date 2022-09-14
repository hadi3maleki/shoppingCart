import React from 'react';

//context
import ProductsContextProvider from './context/ProductsContextProvider';

//components
import Store from './components/Store';

const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <Store/>
      </ProductsContextProvider>
    </div>
  );
};

export default App;