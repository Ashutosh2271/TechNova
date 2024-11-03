import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useContextProducts } from "./ContextApi";
import useFetch from "./hooks/useFetch";
import Bottombar from "./Bottombar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { quantity } = useContextProducts();

  const { data } = useFetch(
    searchTerm
      ? `/api/products?populate=*&filters[title][$contains]=${searchTerm}`
      : null
  );

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    setIsSearchOpen(false); // Close search bar on submit
  };

  const handleMobileSearchIconClick = () => {
    setIsOpen(false);       // Close the mobile menu
    setIsSearchOpen(true);  // Open the search bar
  };

  const closeSearchBar = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    
  ];

  const getNavBackground = () =>
    isHomePage && !scrolled
      ? "bg-transparent"
      : "bg-gradient-to-r from-gray-900 to-blue-900 shadow-lg";

  const navIconButton = (icon, clickHandler) => (
    <button
      onClick={clickHandler}
      className="text-white hover:text-teal-400 transition-colors duration-300"
    >
      {icon}
    </button>
  );

  const renderNavItems = () =>
    navItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="text-white hover:text-teal-400 transition-colors duration-300 text-sm font-medium"
    
      >
        {item.name}
      </Link>
    ));

  const renderSearchResults = () =>
    data?.data?.length > 0 && (
      <ul className="absolute right-0 mt-2 w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden h-72">
        {data.data.map((item) => (
          <Link
            key={item.id}
            to={`product/${item.id}`}
            onClick={() => {
              setSearchTerm("");
              setIsSearchOpen(false);
            }}
          >
            <li className="text-white px-4 py-2 hover:bg-teal-600">{item.title}</li>
          </Link>
        ))}
      </ul>
    );

  return (
    <nav className={`fixed w-full z-50 transition-all top-0 duration-500 ${getNavBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform">
            TechNova
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">{renderNavItems()}</div>

          {/* Desktop and Mobile Right Icons */}
          <div className="flex items-center justify-center space-x-6 relative">
            {navIconButton(
              <FaSearch className="h-5 w-5" />,
              () => isSearchOpen ? closeSearchBar() : handleMobileSearchIconClick()
            )}
            {navIconButton(<FaUser className="h-5 w-5" />)}
            <Link to="/cart" className="relative">
              {navIconButton(<FaShoppingCart className="h-5 w-5" />)}
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {quantity}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width Search Bar */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-gray-900 p-4 z-40 flex items-center">
          <form onSubmit={handleSearch} className="w-full flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Search products..."
            />
            <button
              type="button"
              onClick={closeSearchBar}
              className="ml-2 text-white hover:text-teal-400 transition-colors duration-300"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </form>
          {renderSearchResults()}
        </div>
      )}

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Bottombar />
      </div>
    </nav>
  );
};

export default Navbar;
