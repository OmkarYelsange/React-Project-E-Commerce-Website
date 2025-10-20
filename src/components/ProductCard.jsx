import React, { useState, useEffect, useMemo, useCallback } from "react";
import Product, { HigherOrderFn } from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

// ✅ Memoized versions of components to prevent unnecessary re-renders
const MemoizedProduct = React.memo(Product);
const HigherOrderProduct = React.memo(HigherOrderFn());

const ProductCard = ({ category }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [btnName, setBtnName] = useState("Top Products");
  const [searchText, setSearchText] = useState("");

  // ✅ Fetch product data once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const jsonData = await data.json();

        // If category prop is given → filter by category
        if (category) {
          const filtered = jsonData.filter((p) => p.category === category);
          setAllProducts(filtered);
          setFilteredProducts(filtered);
        } else {
          setAllProducts(jsonData);
          setFilteredProducts(jsonData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [category]);

  // ✅ Toggle between Top and All Products
  const handleToggleProducts = useCallback(() => {
    if (btnName === "Top Products") {
      const filtered = allProducts.filter(
        (product) => product.rating && product.rating.rate >= 4
      );
      setFilteredProducts(filtered);
      setBtnName("All Products");
    } else {
      setFilteredProducts(allProducts);
      setBtnName("Top Products");
    }
  }, [btnName, allProducts]);

  // ✅ Memoized filtered search results
  const searchedProducts = useMemo(() => {
    if (!searchText) return filteredProducts;
    return filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, filteredProducts]);

  if (filteredProducts.length === 0) {
    return <Skeleton />;
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 flex flex-col items-center py-6">
      {/* 🔍 Toolbar Section */}
      <div className="bg-white/90 backdrop-blur-md border border-gray-300 rounded-2xl shadow-sm py-4 px-3 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 w-full max-w-4xl mb-8">
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
            onClick={() => setSearchText("")}
          >
            Clear
          </button>
        </div>
      </div>

      {/* 🛍️ Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center w-full max-w-7xl px-4">
        {searchedProducts.map((product) => (
          <Link
            className="no-underline"
            key={product.id}
            to={`/products/${product.id}`}
          >
            {product.rating.rate >= 4 ? (
              <HigherOrderProduct ProductList={product} />
            ) : (
              <MemoizedProduct ProductList={product} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
