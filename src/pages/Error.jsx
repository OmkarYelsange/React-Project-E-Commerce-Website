import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%)",
        borderRadius: "24px",
        boxShadow: "0 4px 32px 0 rgba(34,34,59,0.10)",
        margin: "40px auto",
        maxWidth: "600px",
        padding: "48px 32px",
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "16px", color: "#5e60ce" }}>
        🚫
      </div>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          color: "#22223b",
          marginBottom: "12px",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Oops! Something went wrong.
      </h1>
      <h2
        style={{
          fontSize: "1.3rem",
          fontWeight: 500,
          color: "#7c3aed",
          marginBottom: "18px",
          textAlign: "center",
        }}
      >
        404 - Page Not Found
      </h2>

      <a
        href="/"
        style={{
          marginTop: "18px",
          background: "linear-gradient(90deg, #5e60ce 0%, #4361ee 100%)",
          color: "#fff",
          padding: "10px 28px",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: "0 2px 8px 0 rgba(67, 97, 238, 0.10)",
          transition: "background 0.18s, transform 0.18s",
        }}
      >
        Go Home
      </a>
    </div>
  );
};

export default Error;
