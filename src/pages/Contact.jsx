import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">Address: 123 Tech Street, india </p>
            <p className="text-gray-600 mb-4">Phone: 9129416633</p>
            <p className="text-gray-600">Email: <a href="mailto:info@techstore.com" className="text-blue-600 hover:text-blue-700">info@techstore.com</a></p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Social Media</h2>
            <div className="flex flex-col space-y-4">
                <a href="https://www.facebook.com/techstore" className="text-blue-600 hover:text-blue-700">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com/techstore" className="text-blue-600 hover:text-blue-700">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/techstore" className="text-blue-600 hover:text-blue-700">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact