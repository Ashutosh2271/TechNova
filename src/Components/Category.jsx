import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaRegLightbulb, FaShieldAlt, FaRegClock } from 'react-icons/fa';

const CategoryCard = ({ image, name, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  
  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onClick={handleClick}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-tr-full" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Background Blur Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

      {/* Content Container */}
      <div className="relative p-6">
        {/* New Badge (if needed) */}
        <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
          NEW
        </div>

        <div className="h-48 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            loading="lazy"
            className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-110" 
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
            {name}
          </h3>

          {/* Hover Content */}
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm text-gray-200">Explore Collection</span>
            <FaArrowRight className="text-teal-400 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl transition-colors duration-300" />
    </div>
  );
};

const Category = ({ categories }) => {
  const baseUrl = import.meta.env.VITE_APP_URL || "";

  if (!categories || !categories.data || !Array.isArray(categories.data)) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Categories
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of tech products across different categories
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.data?.map((item) => {
            const imageUrl = item?.img?.url
              ? `${item.img?.url}`
              : "https://via.placeholder.com/300x200";
              console.log(item.img); // Check the `img` field for each category

            return (
              <CategoryCard
                key={item.id}
                image={imageUrl}
                name={item.title}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
