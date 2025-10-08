import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import "./index.css";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import ProductDetails from "./components/ProductDetails";
// import About from "./pages/About";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
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
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
