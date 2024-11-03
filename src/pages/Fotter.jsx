import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter, FaInstagram } from 'react-icons/fa'

const Fotter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">We are a leading e-commerce platform offering a wide range of products including Laptops, earphones, and speakers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
        
              <li><Link to="/support" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/About" className="text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-500">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <FaInstagram className='text-2xl'/>
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <FaTwitter className='text-2xl'/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 TechNova . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Fotter