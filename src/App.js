import React from 'react'
import ProductGrid from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Pages/Hero';
import DryFruits from './Pages/Product Pages/DryFruits';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product' element={<ProductGrid />} />
        <Route path='/dryfruits' element={<DryFruits />} />
      </Routes>
    </BrowserRouter>
  )
}
