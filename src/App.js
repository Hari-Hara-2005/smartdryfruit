import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductGrid from './Product';
import Hero from './Pages/Hero';
import DryFruits from './Pages/Product Pages/DryFruits';
import Dates from './Pages/Product Pages/Dates';
import Nuts from './Pages/Product Pages/Nuts';
import Seeds from './Pages/Product Pages/Seeds';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact-Us';
import Chocolates from './Pages/Product Pages/Chocolates';
import Juice from './Pages/Product Pages/Juice';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product' element={<ProductGrid />} />
        <Route path='/dryfruits' element={<DryFruits />} />
        <Route path='/dates' element={<Dates />} />
        <Route path='/nuts' element={<Nuts />} />
        <Route path='/seeds' element={<Seeds />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/chocolates' element={<Chocolates />} />
        <Route path='/Juice' element={<Juice />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; // Make sure to use default export
