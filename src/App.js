import React from 'react';
import ProductsContextProvider from './context/ProductsContextProvider';
const App = () => {
  return (
    <div>
      <ProductsContextProvider>

      </ProductsContextProvider>
    </div>
  );
};

export default App;