import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center 
      bg-gradient-to-tr from-slate-50 to-indigo-100 
      rounded-3xl shadow-[0_4px_32px_rgba(34,34,59,0.10)] 
      my-10 mx-auto max-w-[600px] px-8 py-12"
    >
      <div className="text-[5rem] mb-4 text-indigo-500">🚫</div>

      <h1
        className="text-[2.2rem] font-bold text-[#22223b] mb-3 
        text-center tracking-wide"
      >
        Oops! Something went wrong.
      </h1>

      <h2
        className="text-[1.3rem] font-medium text-violet-600 
        mb-5 text-center"
      >
        404 - Page Not Found
      </h2>

      <a
        href="/"
        className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 
        text-white px-7 py-2.5 rounded-2xl no-underline font-semibold 
        text-[1.1rem] shadow-[0_2px_8px_rgba(67,97,238,0.10)] 
        transition-all duration-200 hover:scale-105 hover:shadow-lg"
      >
        Go Home
      </a>
    </div>
  );
};

export default Error;
