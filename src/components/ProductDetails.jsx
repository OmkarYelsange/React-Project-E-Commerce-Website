import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useDispatch } from "react-redux";
import { addItems } from "../store/CartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);
  const dispatch = useDispatch(addItems);

  if (!singleProduct) {
    return <Skeleton />;
  }
  const handleCartItems = () => {
    // Dispatch action to add item to cart
    dispatch(addItems(singleProduct));
  };

  const { image, title, price, description, category, rating } = singleProduct;

  return (
    <div className="relative flex flex-wrap items-start justify-center   bg-white rounded-xl p-6 shadow-md max-w-5xl mx-auto my-10 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
      {/* 🏷️ Best Seller Badge */}
      {rating?.rate > 4 && (
        <span className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-1 rounded-md text-xs font-semibold z-10 pointer-events-none shadow-md">
          Best Seller
        </span>
      )}

      {/* 🖼️ Product Image */}
      <div className="flex-1 basis-[40%] min-w-[280px] text-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[300px] rounded-lg object-contain mx-auto"
        />
      </div>

      {/* 🧾 Product Info */}
      <div className="flex-1 basis-[55%] min-w-[280px] pl-6 pt-3 sm:pt-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          {title}
        </h1>

        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
          <span>
            Category:{" "}
            <strong className="text-gray-800 capitalize">{category}</strong>
          </span>
          <span className="flex items-center">
            {rating?.rate}{" "}
            <span role="img" aria-label="star" className="ml-1">
              ⭐
            </span>
            <span className="ml-1 text-gray-400">
              ({rating?.count} ratings)
            </span>
          </span>
        </div>

        <div className="text-xl font-semibold text-purple-700 mb-5">
          Price: ${price}
        </div>

        <button
          className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-md font-semibold shadow-md hover:shadow-[0_0_12px_rgba(147,51,234,0.5)] transition-all duration-300"
          onClick={handleCartItems}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
