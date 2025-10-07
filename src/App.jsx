import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
