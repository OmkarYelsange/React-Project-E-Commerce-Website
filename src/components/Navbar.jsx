import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [btnName, setBtnName] = useState("☀️");

  useEffect(() => {}, []);

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #fff",
        padding: "18px 40px",
        backgroundColor: "purple",
        color: "white",
        minHeight: "64px",
        fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
        letterSpacing: "0.5px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          margin: 0,
          letterSpacing: "2px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          LOGO
        </Link>
      </h1>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          height: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "1.18rem",
            fontWeight: 600,
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          <li>
            <Link
              to="/mens"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              MENS
            </Link>
          </li>
          <li>
            <Link
              to="/womens"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              WOMENS
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              KIDS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
