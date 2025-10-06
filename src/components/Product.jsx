import React from "react";

const Product = ({ ProductList }) => {
  const { image, title, rating, price } = ProductList;

  return (
    <div className="Product">
      <img className="Product_img" src={image} alt={title} />
      <h1>{title}</h1>
      <p className="rating">
        {rating.rate}{" "}
        <span role="img" aria-label="star">
          ⭐
        </span>
      </p>
      <p>$ {price}</p>
    </div>
  );
};
export default Product;
