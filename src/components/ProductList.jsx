import Product from './Product';

function ProductList({ products }) {
  return (
    <>
      {products.map(product => (
        <Product key={product.name} {...product} />
      ))}
    </>
  );
}

export default ProductList;
