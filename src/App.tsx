import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const clearCart = () => {
    // axios call
  }

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
