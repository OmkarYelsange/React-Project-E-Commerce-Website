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
      <Link
        to="/"
        style={{
          display: "flex",
          gap: "10px",
          color: "white",
          textDecoration: "none",
        }}
      >
        <img
          src="/image.png"
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid white",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "2px",
            alignContent: "center",
          }}
        >
          <span style={{ color: "white", textDecoration: "none" }}>E-Shop</span>
        </h1>
      </Link>
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
            <Link
              to="/grocery"
              style={{
                marginLeft: "20px",
                color: "white",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.15s",
              }}
            >
              GROCERY
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
