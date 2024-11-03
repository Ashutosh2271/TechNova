import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './Components/ContextApi'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Footer from './pages/Fotter'
import SinglePage from './pages/SinglePage/SinglePage'
import Cart from './pages/Cart'
import Support from './Components/Support'
import AboutUs from './Components/AboutUs'
import Category from './Components/Category'
import Contact from './pages/Contact'

function App() {
  return (
    
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/category" element={<Category />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </ProductProvider>
    
  )
}

export default App
