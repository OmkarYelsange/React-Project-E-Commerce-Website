import React from "react";
import Product from "./Product";
import ProductList from "../utils/ProductList";

const ProductCard = () => {
  return (
    <div className="Product_Card">
      {ProductList.map((ProductList) => {
        return <Product key={ProductList.id} ProductList={ProductList} />;
      })}
    </div>
  );
};

export default ProductCard;
