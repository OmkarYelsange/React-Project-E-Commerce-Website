import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.CartItems);
  const { user, isSignedIn } = useUser();

  const handleCartClick = (e) => {
    if (!isSignedIn) {
      e.preventDefault();
      alert("⚠️ Please log in to view your cart!");
      navigate("/sign-in");
    }
  };

  const menuLinks = [
    { name: "MENS", path: "/mens" },
    { name: "WOMENS", path: "/womens" },
    { name: "JEWELLERY", path: "/jewellery" },
    { name: "ELECTRONICS", path: "/electronics" },
  ];

  return (
    <header className="flex justify-between items-center border-b border-black py-4 px-6 md:py-[18px] md:px-[40px] bg-purple-700 text-white shadow-md">
      {/* 🛍️ Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-white no-underline hover:opacity-90 transition"
      >
        <img
          src="/image.png"
          alt="Logo"
          className="w-10 h-10 border border-white rounded-full object-cover"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[1px]">
          E-Shop
        </h1>
      </Link>

      {/* 🍔 Mobile Menu Button */}
      <button
        className="block lg:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* 🌐 Navigation */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col absolute top-[72px] left-0 w-full bg-purple-700 border-t border-black py-4 z-20"
            : "hidden lg:flex"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 list-none m-0 p-0 text-lg lg:text-[1.1rem] font-semibold tracking-[0.5px]">
          {/* Category Links */}
          {menuLinks.map((item) => (
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

          {/* 🛒 Cart Button (Protected) */}
          <li>
            <Link
              to="/cart"
              onClick={handleCartClick}
              className="text-white no-underline px-4 py-2 rounded-lg hover:bg-purple-500 hover:scale-105 transform transition-all duration-200"
            >
              CART ({cartItems.length})
            </Link>
          </li>

          {/* 👤 Auth Section */}
          <SignedOut>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-2 lg:mt-0">
              <Link
                to="/sign-in"
                className="text-white no-underline px-4 py-2 rounded-lg border border-zinc-50 hover:bg-purple-500 hover:scale-105 transform transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="text-white no-underline px-4 py-2 rounded-lg border border-zinc-50 hover:bg-purple-500 hover:scale-105 transform transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <li className="flex items-center gap-2 text-white">
              <span className="hidden sm:inline font-semibold">
                {user?.firstName || "User"}
              </span>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </li>
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
