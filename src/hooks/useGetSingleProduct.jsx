import React, { useState } from "react";
import { useEffect } from "react";

const useGetSingleProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const jsonData = await data.json();
    setSingleProduct(jsonData);
  };
  return singleProduct;
};

export default useGetSingleProduct;
