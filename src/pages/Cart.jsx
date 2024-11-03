import React from 'react'
import { FaTrash, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa'
import { useContextProducts } from '../Components/ContextApi'

const Cart = () => {

  const { addCart,handelRemoveCart, handelQuantity,total,quantity } = useContextProducts()
  console.log("item added", addCart)


  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mt-20 mb-8 text-center text-gray-800">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Cart</span>
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full" />
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
            <span className="text-gray-600 bg-blue-50 px-4 py-1 rounded-full">{`${quantity} items`}</span>
          </div>

          <div className="flex flex-col mb-8 space-y-4">
            {addCart.map((item)=>(
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300" key={item.id}>
              <div className="flex items-center">
                <div className="w-24 h-24 bg-white rounded-lg overflow-hidden">
                  <img src={`${item?.img?.url}`} alt="Product" className="w-full h-full object-contain p-2" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.categories[0]?.titile}</p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <div className="flex items-center bg-white rounded-full shadow-sm">
                  <button className="p-2 hover:text-blue-600 transition-colors"
                   onClick={() =>handelQuantity("dec", item)}
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{item.quantity}</span>
                  <button className="p-2 hover:text-blue-600 transition-colors"
                  onClick={()=>handelQuantity("inc", item)}
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-lg font-semibold text-gray-800">{item.price * item.quantity}</span>
                <button className="text-red-500 hover:text-red-600 transition-colors"
                onClick={()=> handelRemoveCart(item) }
                >
                   <FaTrash />
                </button>
              </div>
            </div>

            ))}
            
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              Total: <span className="text-2xl font-bold text-blue-600 ml-2">{`₹${total}`}</span>
            </div>
            <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Proceed to Checkout
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
