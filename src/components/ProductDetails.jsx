import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

const ProductDetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);

  if (!singleProduct) {
    return <Skeleton />;
  }

  const { image, title, price, description, category, rating } = singleProduct;

  return (
    <div className="product-details-card">
      <div className="product-details-img-wrap">
        <img className="product-details-img" src={image} alt={title} />
      </div>
      <div className="product-details-info">
        <h1 className="product-details-title">{title}</h1>
        <p className="product-details-desc">{description}</p>
        <div className="product-details-meta">
          <span className="product-details-category">Category: {category}</span>
          <span className="product-details-rating">
            {rating?.rate}{" "}
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            ({rating?.count} ratings)
          </span>
        </div>
        <div className="product-details-price">Price : $ {price}</div>
        <button className="product-details-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
