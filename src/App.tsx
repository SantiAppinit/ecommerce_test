import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
