import React from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'

const Card = ({ data }) => {
  const imageUrl = data?.img?.[0]?.url
    ? `${import.meta.env.VITE_APP_URL}${data?.img[0].url}`
    : "https://via.placeholder.com/300x200";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-gray-700">4.8 (120 reviews)</span>
          </div>
          <span className="text-sm text-green-600 font-semibold">In Stock</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-500 line-through text-sm">$1299</span>
            <span className="text-2xl font-bold text-blue-600 ml-2">${price}</span>
          </div>
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">Save 23%</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card
