import { useEffect, useState } from "react";
import "../App.css";

const Navbar = () => {
  const [btnName, setBtnName] = useState("☀️");

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
      <h1>LOGO</h1>
      <ul>
        <li>MENS</li>
        <li>WOMENS</li>
        <li>KIDS</li>
        <li>CART</li>
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
