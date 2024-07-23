import React from 'react'
import ProductGrid from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Hero'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product' element={<ProductGrid />} />
      </Routes>
    </BrowserRouter>
  )
}
