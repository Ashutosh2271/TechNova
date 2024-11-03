// src/Context/ApiContext.js
import React, { createContext, Suspense, useContext, useEffect, useState } from 'react';

// Create a context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
    
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(null); // Add categories state
    const [addCart, setAddCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)


     useEffect(()=>{
         let value = 0
          addCart.map(item => value += item.quantity)
          setQuantity(value)
     },[addCart])

    useEffect(() =>{
         let subtotal = 0;
          addCart.map(item => subtotal += item.quantity * item.price)
        setTotal(subtotal)
    
    },[addCart])



 const handelAddCart = (product, quantity) => {
    let item  = [...addCart];
    let index = item.findIndex(p => p.id === product.id)
    if(index !== -1) {
        item[index].quantity += quantity;

    } else {
        product.quantity = quantity
        item = [...item, product]
    }
   setAddCart(item)
 }
   const handelRemoveCart = (product) => {
    let item = [...addCart];
    item = item.filter(p => p.id !== product.id)

    setAddCart(item)
   }
   const handelQuantity = (type, product) => {
    let items = [...addCart];
    const index = items.findIndex((p) => p.id === product.id);

    if (index === -1) return; // if product not found, do nothing

    if (type === "inc") {
        items[index].quantity += 1;
    } else if (type === "dec") {
        if (items[index].quantity === 1) return; // prevent going below 1
        items[index].quantity -= 1;
    }

    setAddCart(items);
};



    return (
        <ProductContext.Provider value={{ 
            products, 
            setProducts, 
            categories, 
            setCategories,
            setAddCart,
            addCart,
            handelAddCart,
            handelRemoveCart,
            handelQuantity,
            total,
             quantity,
        }}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use the ProductContext
export const useContextProducts = () => useContext(ProductContext);
