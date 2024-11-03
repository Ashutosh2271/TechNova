import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const RelatedProducts = ({ productId, categoryId }) => {
  const navigate = useNavigate();

  useEffect(()=>{
  },[])
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}`
  );
  // console.log("Related Products Data:", data);
  
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mt-20 w-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Products</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.data.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            <div className="relative p-4">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full" />
              <img
                src={item.img.url}
                alt={item.title}
                className="w-full h-40 object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
                
              </h3>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-blue-600 font-semibold"></span>
                <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
