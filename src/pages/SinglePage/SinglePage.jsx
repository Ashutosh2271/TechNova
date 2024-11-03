import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Components/hooks/useFetch";
import RelatedProducts from "../../Components/RealtedProdcuts";
import { FaMinus, FaPlus, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useContextProducts } from "../../Components/ContextApi";

const SinglePage = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { data, loading } = useFetch(
    `/api/products?populate=*&filters[id]=${id}`
  );
  console.log("realted prodcuts", data);

  const { handelAddCart } = useContextProducts();

  const handleCount = () => {
    setCount((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row mt-20 gap-12">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full" />
              <img
                src={data?.data[0]?.img.url}
                alt={data?.data?.[0]?.attributes?.title || "Product"}
                className="w-full h-96 object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {data?.data[0]?.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-bold text-gray-600">
              {`₹${data?.data[0]?.price}`}
              </span>

              <span className="text-sm text-gray-500 line-through"></span>
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                Save 20%
              </span>
            </div>

            <p className="text-gray-600 mb-8">
            {data?.data[0]?.decs}
            </p>

            <div className="space-y-6">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Quantity:</span>
                <div className="flex items-center bg-gray-100 rounded-full">
                  <button
                    className="p-3 hover:text-blue-600 transition-colors"
                    onClick={handleCount}
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{count}</span>
                  <button
                    className="p-3 hover:text-blue-600 transition-colors"
                    onClick={() => setCount(count + 1)}
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => handelAddCart(data.data[0], count)}
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button className="p-3 border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <FaRegHeart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {loading ? (
          <div>loading...</div>
        ) : (
          <RelatedProducts
            productId={id}
            categoryId={data?.data[0]?.categories[0]?.id}
          />
        )}
      </div>
    </div>
  );
};

export default SinglePage;
