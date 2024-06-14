import { ChakraProvider } from '@chakra-ui/react';
import ProductList from './components/ProductList';

import jsonProducts from './assets/products.json';
import ProductForm from './components/ProductForm';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([jsonProducts]);

  const addProduct = product => setProducts([...products, product]);

  useEffect(() => {
    localStorage.setItem(products, JSON.stringify(products));
  }, [products]);
  return (
    <ChakraProvider>
      <ProductList products={products} />
      <ProductForm onAddProduct={addProduct} />
    </ChakraProvider>
  );
}

export default App;
