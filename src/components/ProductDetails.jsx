import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const jsonData = await data.json();
    setSingleProduct(jsonData);
  };
  if (singleProduct === null) {
    <Skeleton />;
  }

  const { image, title, rate, price, description, category } = singleProduct;

  return (
    <div className="Product">
      <img className="Product_img" src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <p className="rating">
        {rate}
        <span role="img" aria-label="star">
          ⭐
        </span>
      </p>
      <p>$ {price}</p>
    </div>
  );
};

export default ProductDetails;
