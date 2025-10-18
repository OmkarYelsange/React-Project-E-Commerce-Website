import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import UserContext from "../utils/userContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center border-b border-black py-4 px-6 md:py-[18px] md:px-[40px] bg-purple-700 text-white min-h-16 font-sans tracking-[0.5px]">
      {/* Logo Section */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-white no-underline"
      >
        <img
          src="/image.png"
          alt="Logo"
          className="w-10 h-10 border border-white rounded-full object-cover"
        />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-[2px]">
          E-Shop
        </h1>
      </Link>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="block lg:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col absolute top-[72px] left-0 w-full bg-purple-700 border-t border-black py-4 z-10"
            : "hidden lg:flex"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 list-none m-0 p-0 text-lg lg:text-[1.18rem] font-semibold font-sans tracking-[0.5px]">
          {[
            { name: "MENS", path: "/mens" },
            { name: "WOMENS", path: "/womens" },
            { name: "ELECTRONICS", path: "/electronics" },
            { name: "ABOUT", path: "/about" },
            { name: "CART", path: "/cart" },
            { name: `${name}`, path: "" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-white no-underline px-4 py-2 rounded-lg hover:bg-purple-500 hover:scale-105 transform transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
