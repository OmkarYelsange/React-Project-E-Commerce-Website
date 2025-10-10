import React, { useState, useEffect } from "react";
import Product, { HigherOrderFn } from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [btnName, setBtnName] = useState("Top Products");
  const [searchText, setSearchText] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    setAllProducts(jsonData);
    setTopProducts(jsonData);
    setSearchedProducts(jsonData);
  };

  // ✅ Initialize Higher Order Component only once
  const HigherOrderProduct = HigherOrderFn();

  const handleToggleProducts = () => {
    if (btnName === "Top Products") {
      const filtered = allProducts.filter(
        (product) => product.rating && product.rating.rate >= 4
      );
      setTopProducts(filtered);
      setSearchedProducts(filtered);
      setBtnName("All Products");
    } else {
      setTopProducts(allProducts);
      setSearchedProducts(allProducts);
      setBtnName("Top Products");
    }
  };

  const handleSearch = () => {
    const filtered = topProducts.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedProducts(filtered);
    setSearchText("");
  };

  return topProducts.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 min-h-screen flex flex-wrap bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 p-5 justify-center gap-6 ">
      {/* 🔍 Toolbar Section */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-300 rounded-xl shadow-sm py-4 px-2 sm:px-6 md:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full border border-black transition duration-300 shadow-md hover:shadow-lg"
            onClick={handleToggleProducts}
          >
            {btnName}
          </button>

          <input
            type="text"
            placeholder="Search Product"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-64"
          />

          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full border border-black transition duration-300 shadow-md hover:shadow-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* 🛍️ Product Cards Grid */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 p-5 flex flex-wrap justify-center gap-6">
        {searchedProducts.map((product) => (
          <Link
            className="no-underline"
            key={product.id}
            to={`/products/${product.id}`}
          >
            {product.rating.rate >= 4 ? (
              <HigherOrderProduct ProductList={product} />
            ) : (
              <Product ProductList={product} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
