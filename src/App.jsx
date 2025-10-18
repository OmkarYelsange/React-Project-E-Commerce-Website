import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import "./App.css";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Electronics";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { lazy, Suspense } from "react";
import SingleProduct from "./pages/SingleProduct";
import Electronics from "./pages/Electronics";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
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
        path: "/electronics",
        element: <Electronics />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
