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
      <p>Price : $ {price}</p>
    </div>
  );
};
export default Product;

// Higher Order Component
export const HigherOrderFn = () => {
  return (props) => {
    return (
      <div
        style={{
          position: "relative",
          width: "250px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease",
        }}
        className="product-card"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* ✅ Badge attached inside the card */}
        <span
          style={{
            position: "absolute",

            backgroundColor: "purple",
            color: "white",
            padding: "4px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            zIndex: 1,
            pointerEvents: "none", // ✅ ensures hover works on the whole card
          }}
        >
          Best Seller
        </span>

        {/* ✅ The actual product component */}
        <Product {...props} />
      </div>
    );
  };
};
