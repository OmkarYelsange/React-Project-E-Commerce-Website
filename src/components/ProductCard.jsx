import React, { useState } from "react";
import Product from "./Product";
// import { ProductList } from "../Data/ProductList";
import { useEffect } from "react";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  // const [TopProducts, setTopProducts] = useState(ProductList);
  const [TopProducts, setTopProducts] = useState([]);
  const [btnName, setBtnName] = useState("Top Rated Products");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setTopProducts(jsonData);
  };

  return TopProducts.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "2px",
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Product"
            value={searchText}
            style={{
              padding: "10px",
              borderRadius: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <button
            style={{ padding: "10px", borderRadius: "20px" }}
            onClick={() => {
              console.log(searchText);
              const filteredProduct = TopProducts.filter((ProductList) => {
                return ProductList.title.includes(searchText.toLowerCase());
              });
              setTopProducts(filteredProduct);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          style={{
            margin: "10px",
            background: "purple",
            color: "white",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid black",
          }}
          onClick={() => {
            const filteredProduct = TopProducts.filter(
              (ProductList) => ProductList.rating.rate >= 4
            );

            setTopProducts(filteredProduct);
            btnName === "Top Rated Products"
              ? setBtnName("All Products")
              : setBtnName("Top Rated Products");

            if (btnName === "All Products") {
              fetchData();
            }
          }}
        >
          {btnName}
        </button>
      </div>
      <div className="Product_Card">
        {TopProducts.map((ProductList) => {
          return <Product key={ProductList.id} ProductList={ProductList} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
