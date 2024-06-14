import { useState, useRef } from 'react';

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState([]);

  const inputNameRef = useRef(null);
  const inputPriceRef = useRef(null);
  const inputDescriptionRef = useRef(null);

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    inputNameRef.current.reset();
    inputPriceRef.current.reset();
    inputDescriptionRef.current.reset();

    inputNameRef.current.focus();

    onAddProduct(formData);
  };
  return (
    <>
      <h1>Add a product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name :</label>
          <input
            ref={inputNameRef}
            id='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='price'>Price :</label>
          <input
            id='price'
            ref={inputPriceRef}
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description :</label>
          <textarea
            id='description'
            ref={inputDescriptionRef}
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </form>
      <button>Add a product</button>
    </>
  );
}

export default ProductForm;
