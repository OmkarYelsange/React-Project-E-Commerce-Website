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
    <div
      className="product-details-card"
      style={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "40px auto",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* ✅ Conditionally render Best Seller badge (rating > 4.5) */}
      {rating?.rate > 4 && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "purple",
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          Best Seller
        </span>
      )}

      {/* 🖼️ Product Image */}
      <div
        className="product-details-img-wrap"
        style={{
          flex: "1 1 40%",
          textAlign: "center",
          minWidth: "280px",
        }}
      >
        <img
          className="product-details-img"
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "10px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* 🧾 Product Information */}
      <div
        className="product-details-info"
        style={{
          flex: "1 1 55%",
          paddingLeft: "30px",
          paddingTop: "10px",
          minWidth: "280px",
        }}
      >
        <h1
          className="product-details-title"
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#222",
          }}
        >
          {title}
        </h1>

        <p
          className="product-details-desc"
          style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          {description}
        </p>

        <div
          className="product-details-meta"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            fontSize: "14px",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          <span className="product-details-category">
            Category: <strong>{category}</strong>
          </span>
          <span className="product-details-rating">
            {rating?.rate}{" "}
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            ({rating?.count} ratings)
          </span>
        </div>

        <div
          className="product-details-price"
          style={{
            fontSize: "20px",
            fontWeight: "600",
            margin: "10px 0 20px 0",
            color: "purple",
          }}
        >
          Price: ${price}
        </div>

        <button
          className="product-details-btn"
          style={{
            padding: "10px 20px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#6b21a8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "purple")
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
