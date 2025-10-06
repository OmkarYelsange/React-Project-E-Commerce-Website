import React, { useState } from "react";
import Product from "./Product";
// import { ProductList } from "../Data/ProductList";
import { useEffect } from "react";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  // const [TopProducts, setTopProducts] = useState(ProductList);
  const [TopProducts, setTopProducts] = useState([]);
  const [btnName, setBtnName] = useState("Top Products");
  const [searchText, setSearchText] = useState("");
  const [searchedProducts, setsearchedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setTopProducts(jsonData);
    setsearchedProducts(jsonData);
  };

  return TopProducts.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
          }}
        >
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
              btnName === "Top Products"
                ? setBtnName("All Products")
                : setBtnName("Top Products");

              if (btnName === "All Products") {
                fetchData();
              }
            }}
          >
            {btnName}
          </button>
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Product"
            value={searchText}
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <button
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid black",
            }}
            onClick={() => {
              console.log(searchText);
              const filteredProduct = TopProducts.filter((ProductList) => {
                return ProductList.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setsearchedProducts(filteredProduct);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="Product_Card">
        {searchedProducts.map((ProductList) => {
          return <Product key={ProductList.id} ProductList={ProductList} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
