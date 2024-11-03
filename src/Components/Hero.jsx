import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShoppingCart, FaRegStar, FaCode, FaRocket } from 'react-icons/fa';
// import {useFetch} from '../Components/hooks/useFetch'
import useFetch from '../Components/hooks/useFetch'

const Hero = () => {

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 md:min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-40 animate-float-slow">
        <FaCode className="text-4xl text-blue-400 opacity-50" />
      </div>
      <div className="absolute bottom-20 left-40 animate-float">
        <FaRocket className="text-4xl text-teal-400 opacity-50" />
      </div>

      <div className="md:w-1/2 mx-auto text-center py-16 relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Center Content */}
          <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-1 rounded-full w-fit text-sm font-medium hover:scale-105 transform cursor-pointer">
            🎉 New Collection 2024
          </div>
          
          <h1 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-600 text-4xl lg:text-6xl  font-bold text-white md:leading-tight w-full">
            Discover Next-Gen
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 hover:from-teal-400 hover:to-blue-400 transition-all duration-300 text-center">
              Tech Innovations
            </span>
          </h1>

          <p className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 text-base text-gray-300 w- ">
            Experience cutting-edge technology with our latest collection of premium devices and smart solutions.
          </p>

          <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 flex md:flex-wrap gap-4 px-4">
            <Link 
              to="/products" 
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-2 rounded-full md:text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Shop Now
              <FaShoppingCart className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/featured" 
              className="group flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Featured Products
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 flex items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
              <FaRegStar className="text-yellow-400" />
              <span>Trusted by 10k+ customers</span>
            </div>
            <div className="h-8 w-px bg-white"></div>
            <div className="hover:text-teal-400 transition-colors duration-300">Premium Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
