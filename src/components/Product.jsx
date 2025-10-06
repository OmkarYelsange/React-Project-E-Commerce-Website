import React from "react";

const Product = ({ ProductList }) => {
  const { image, title, rating, price } = ProductList;

  return (
    <div className="Product">
      <img className="Product_img" src={image} />
      <h3>{title}</h3>
      <p>{rating.rate} ⭐</p>
      <p>$ {price}</p>
    </div>
  );
};
export default Product;
