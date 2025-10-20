import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems, clearItems } from "../store/CartSlice"; // ✅ Make sure you have this action

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.CartItems);
  const ClearItemsHandler = () => {
    dispatch(clearItems());
  };

  // 🧾 Handle empty cart
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty cart"
          className="w-40 mb-4 opacity-80"
        />
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <p className="text-gray-500 mt-2">
          Add some products to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-4 sm:p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-center text-purple-700">
          🛍️ Your Cart
        </h1>
        <button
          onClick={ClearItemsHandler}
          className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white text-lg rounded-md font-semibold shadow-md hover:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-start justify-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            {/* 🖼️ Product Image */}
            <div className="flex-1 basis-[40%] min-w-[250px] text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[200px] rounded-lg object-contain mx-auto"
              />
            </div>

            {/* 🧾 Product Info */}
            <div className="flex-1 basis-[55%] min-w-[250px] pl-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {item.title}
              </h1>
              <p className="text-gray-600 text-base mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="text-sm text-gray-500 mb-2">
                Category:{" "}
                <strong className="text-gray-800 capitalize">
                  {item.category}
                </strong>
              </div>

              <div className="text-xl font-semibold text-purple-700 mb-4">
                Price: ${item.price}
              </div>

              <button
                onClick={() => dispatch(removeItems(item.id))}
                className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md font-semibold shadow-md hover:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
