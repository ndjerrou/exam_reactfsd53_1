import Product from './Product';

function ProductList({ products }) {
  return (
    <>
      <h1>Mes produits</h1>
      <div style={{ display: 'flex' }}>
        {products.map(product => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
