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
        borderBottom: "1px solid black",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
        backgroundColor: "purple",
        color: "white",
      }}
    >
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
      <ul>
        <li>
          <Link to="/mens">MENS</Link>
        </li>
        <li>
          <Link to="/womens">WOMENS</Link>
        </li>
        <li>
          <Link to="/kids">KIDS</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <button
          style={{
            background: "purple",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
            border: "1px solid white",
          }}
          onClick={() => {
            btnName === "☀️" ? setBtnName("🌙") : setBtnName("☀️");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
