import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { useState, useRef } from 'react';

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
  });

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

    inputNameRef.current.value = '';
    inputDescriptionRef.current.value = '';
    inputPriceRef.current.value = '';

    inputNameRef.current.focus();

    onAddProduct(formData);
  };
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Heading mt={8}>Add a product</Heading>

      <Box display='flex' alignItems='center' justifyContent='center' h='100vh'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name :</label>
            <Input
              ref={inputNameRef}
              id='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              name='name'
            />
          </div>
          <div>
            <label htmlFor='price'>Price :</label>
            <Input
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
            <Textarea
              id='description'
              ref={inputDescriptionRef}
              value={formData.description}
              onChange={handleChange}
              name='description'
            />
          </div>
          <Button type='submit'>Add a product</Button>
        </form>
      </Box>
    </Box>
  );
}

export default ProductForm;
