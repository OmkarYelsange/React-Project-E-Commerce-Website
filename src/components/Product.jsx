import React from "react";

// ✅ Product Component
const Product = ({ ProductList }) => {
  const { image, title, rating, price } = ProductList;

  return (
    <div className="flex flex-col justify-between items-center bg-white rounded-2xl shadow-md overflow-hidden p-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] w-[270px] h-[460px] sm:w-[290px] sm:h-[480px]">
      {/* Product Image */}
      <div className="w-full h-52 flex items-center justify-center mb-3">
        <img
          className="max-h-full object-contain transition-transform duration-300 hover:scale-100"
          src={image}
          alt={title}
        />
      </div>

      {/* Product Title */}
      <h1 className="text-base font-semibold text-gray-800 text-center mb-2 px-1 leading-tight">
        {title}
      </h1>

      {/* Rating */}
      <p className="text-yellow-500 font-medium flex items-center justify-center text-sm">
        {rating.rate}
        <span role="img" aria-label="star" className="ml-1 text-sm">
          ⭐
        </span>
      </p>

      {/* Price */}
      <p className="text-gray-700 font-semibold mt-1 text-sm">
        Price: ${price}
      </p>

      {/* Add to Cart Button */}
      <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(147,51,234,0.6)] mt-3 w-[80%] text-sm">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

// ✅ Higher Order Component for "Best Seller" Badge
export const HigherOrderFn = () => {
  return (props) => {
    return (
      <div className="relative w-[270px] h-[460px] sm:w-[290px] sm:h-[480px] rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]">
        {/* Best Seller Badge */}
        <span className="absolute top-2 left-2 bg-purple-700 text-white px-3 py-1 rounded-md text-xs font-bold z-10 pointer-events-none shadow-md">
          Best Seller
        </span>

        {/* Product Card */}
        <Product {...props} />
      </div>
    );
  };
};
