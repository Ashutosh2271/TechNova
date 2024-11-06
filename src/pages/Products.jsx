  import React from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import useFetch from "../Components/hooks/useFetch";
  import { FaShoppingCart, FaStar, FaRegLightbulb, FaShieldAlt, FaRegClock } from 'react-icons/fa';

  const ProductCard = ({ product }) => {


    const navigate = useNavigate();
    const imageUrl = product.img.url

    return (
      <div 
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full" />
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-64">
          <img
            src={imageUrl}
            alt={product.title}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Add Button */}
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <FaShoppingCart className="text-blue-600" />
            Quick Add
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">(4.0)</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description || "Experience innovation with our latest tech product."}
          </p>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 line-through">₹{(product.price * 1.2).toFixed(2)}</p>
              <p className="text-xl font-bold text-blue-600">₹{product.price}</p>
            </div>
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Products = () => {
    const { id } = useParams();
    const { data, } = useFetch(
      id
        ? `/api/products?populate=*&filters[categories][id]=${id}`
        : `/api/products?populate=*`
    );
    console.log(data)

    
    return (
      <div className="min-h-screen bg-white relative overflow-hidde ">
      
        <div className="container mx-auto px-4 py-16 relative mt-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Products
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium tech products designed for innovation and performance
            </p>

            {/* Feature Highlights */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <FaRegLightbulb className="text-blue-500" />
                <span>Smart Tech</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaShieldAlt className="text-teal-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaRegClock className="text-blue-500" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data?.data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {(!data?.data || data.data.length === 0) && (
            <div className="text-center text-gray-500 py-16">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Products;
