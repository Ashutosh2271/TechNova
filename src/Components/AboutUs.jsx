import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              About Our Store
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering quality products and exceptional shopping experiences since 2024
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              To provide our customers with the highest quality products while maintaining 
              exceptional service standards. We strive to make online shopping seamless, 
              enjoyable, and accessible to everyone.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted and preferred online shopping destination by 
              consistently delivering value, innovation, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
                  alt="Tech Store History"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, our journey began with a simple idea: to create an 
                  online shopping platform that puts customers first. What started as a 
                  small venture has grown into a trusted marketplace serving thousands 
                  of satisfied customers.
                </p>
                <p className="text-gray-600">
                  Today, we continue to grow and innovate, always keeping our core values 
                  of quality, trust, and customer satisfaction at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We never compromise on the quality of our products and services</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Constantly improving to serve you better</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-blue-600 mb-2">5K+</h4>
              <p className="text-gray-600">Tech Enthusiasts</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-600 mb-2">2000+</h4>
              <p className="text-gray-600">Tech Products</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-600 mb-2">1+</h4>
              <p className="text-gray-600">Years in Tech</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-600 mb-2">24/7</h4>
              <p className="text-gray-600">Tech Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs