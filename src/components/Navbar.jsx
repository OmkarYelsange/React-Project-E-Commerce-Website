import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <h1 className="text-xl sm:text-2xl font-bold m-0 tracking-[2px] content-center">
          <span className="text-white no-underline text-3xl font-bold">
            E-Shop
          </span>
        </h1>
      </Link>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="block md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Nav Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col absolute top-[72px] left-0 w-full bg-purple-700 border-t border-black py-4"
            : "hidden"
        } md:flex md:items-center md:gap-6 md:h-full md:static md:bg-transparent md:border-none`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-7 list-none m-0 p-0 text-lg md:text-[1.18rem] font-semibold font-sans tracking-[0.5px]">
          <li>
            <Link
              to="/mens"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              MENS
            </Link>
          </li>
          <li>
            <Link
              to="/womens"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              WOMENS
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              KIDS
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              GROCERY
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white no-underline px-3 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
