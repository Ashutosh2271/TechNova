import React from 'react';
import { FaHome, FaShoppingBag, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Bottombar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Products", path: "/products", icon: <FaShoppingBag /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg py-3 px-4">
      <div className="flex justify-between items-center overflow-x-auto">
        <ul className='flex justify-between items-center gap-6 min-w-full'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center text-white hover:text-gray-200 transition-colors duration-300 ${
                  location.pathname === item.path ? 'font-bold' : ''
                }`}
                aria-label={item.name}
              >
                {item.icon} <span className="ml-1">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
