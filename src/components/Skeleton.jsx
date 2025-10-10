import React from "react";

const Skeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 p-6 flex flex-wrap justify-center gap-6 animate-fade-in">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between items-center bg-white rounded-2xl shadow-md overflow-hidden p-5 w-[270px] h-[460px] sm:w-[290px] sm:h-[480px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="w-full h-52 mb-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Title Skeleton */}
          <div className="w-5/6 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md mb-2 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Rating Skeleton */}
          <div className="w-1/2 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md mb-2 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Price Skeleton */}
          <div className="w-2/3 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md mb-3 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Button Skeleton */}
          <div className="w-[80%] h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md mt-3 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
