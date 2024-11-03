import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import Newsletter from "../Components/Newsletter";
import { fetchDataFromApi } from "../Utils/api";
import { useContextProducts } from "../Components/ContextApi";

const HomePage = () => {

  const { categories, setCategories,  } = useContextProducts([]);

console.log(categories)


   useEffect(()=>{
    getCategories()
   },[])
  const getCategories = async () => {
   await fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => console.log("Error fetching categories:", error));
  };


  return (
    <div>
      <Hero />
      <Category categories={categories} />
      <Newsletter />
    </div>
  );
};

export default HomePage;
