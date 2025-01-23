import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './page/Detail'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/product/:slug" element={<Detail/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
