import React from 'react'
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1></h1>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products' element={<ProductComponent />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="*" element={
            <h1>404 not found</h1>
          } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
