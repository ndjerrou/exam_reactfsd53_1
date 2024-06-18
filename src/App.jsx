import { Menu } from '@chakra-ui/react';
import ProductList from './components/ProductList';

import jsonProducts from './assets/products.json';
import ProductForm from './components/ProductForm';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = product => setProducts([...products, product]);

  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      const previousProducts = localStorage.getItem('products');

      previousProducts
        ? setProducts(JSON.parse(previousProducts))
        : setProducts(jsonProducts);

      firstRenderRef.current = false;
      return;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <>
      <Menu />
      <ProductList products={products} />
      <ProductForm onAddProduct={addProduct} />
    </>
  );
}

export default App;
