import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { router } from './routing/router.jsx';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router}></RouterProvider>
  </ChakraProvider>
);
