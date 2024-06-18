import { createBrowserRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import App from '../App';
import Homepage from './Homepage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'products/add',
    element: <ProductForm />,
  },
]);
