import React, { useState } from "react";
import Product from "./Product";
// import { ProductList } from "../Data/ProductList";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [allProducts, setAllProducts] = useState([]); // store all products
  const [TopProducts, setTopProducts] = useState([]); // currently displayed products
  const [btnName, setBtnName] = useState("Top Products");
  const [searchText, setSearchText] = useState("");
  const [searchedProducts, setsearchedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setAllProducts(jsonData);
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
              if (btnName === "Top Products") {
                const filteredProduct = allProducts.filter(
                  (product) => product.rating && product.rating.rate >= 4
                );
                setTopProducts(filteredProduct);
                setsearchedProducts(filteredProduct);
                setBtnName("All Products");
              } else {
                setTopProducts(allProducts);
                setsearchedProducts(allProducts);
                setBtnName("Top Products");
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
          return (
            <Link key={ProductList.id} to={`/products/${ProductList.id}`}>
              <Product ProductList={ProductList} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
