import { useEffect, useState } from "react";
import "../App.css";

const Navbar = () => {
  const [btnName, setBtnName] = useState("LIGHT");

  return (
    <div className="navbar">
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
            borderRadius: "10px",
            border: "1px solid black",
          }}
          onClick={() => {
            btnName === "LIGHT" ? setBtnName("DARK") : setBtnName("LIGHT");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
