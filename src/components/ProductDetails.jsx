import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [productId]);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const jsonData = await data.json();
    setSingleProduct(jsonData);
  };

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
        <div className="product-details-price">$ {price}</div>
        <button className="product-details-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
