import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section className="newsletter bg-primary text-white py-5 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Tech Background" 
            className="w-full h-full object-cover opacity-1"
          />
        </div>
        <div className="container relative z-10">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Stay Connected with Tech Trends</h2>
              <p className="mb-8 text-xl text-gray-200">Subscribe to our newsletter for the latest gadgets, innovations, and exclusive offers!</p>
              <form className="flex flex-col sm:flex-row justify-center items-center">
                <input 
                  type="email" 
                  className="w-full sm:w-64 px-4 py-3 mb-4 sm:mb-0 sm:mr-4 text-gray-800 bg-white bg-opacity-80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="Enter your email" 
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter