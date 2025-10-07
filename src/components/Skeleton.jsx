import React from "react";

const Skeleton = () => {
  // Render 8 skeleton cards for loading state
  return (
    <div className="skeleton-container">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div className="skeleton-card" key={idx}>
          <div className="skeleton-img" />
          <div className="skeleton-title" />
          <div className="skeleton-rating" />
          <div className="skeleton-price" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
