import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import "./App.css";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { lazy, Suspense } from "react";
import SingleProduct from "./pages/SingleProduct";
import Electronics from "./pages/Electronics";
import { Provider } from "react-redux";
import appStore from "./store/AppStore";

// 🧭 Clerk Imports
import {
  ClerkProvider,
  SignIn,
  SignUp,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// 🔑 Clerk Frontend API key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Jewellery = lazy(() => import("./pages/Jewellery"));

/* 🔐 Protected Route Component */
const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className="text-center mt-10 text-xl font-semibold text-gray-700">
        Loading user...
      </div>
    );

  if (!isSignedIn) return <RedirectToSignIn />;

  return children;
};

/* 🧩 App Layout */
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="min-h-[100vh] flex flex-col bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

/* 🧭 Router Setup */
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ProductCard /> },
      { path: "/mens", element: <Mens /> },
      { path: "/womens", element: <Womens /> },
      { path: "/electronics", element: <Electronics /> },
      {
        path: "/jewellery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Jewellery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:productId", element: <SingleProduct /> },
      {
        path: "/sign-in/*",
        element: (
          <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
            <SignIn
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                  card: "shadow-xl rounded-2xl border border-gray-200",
                },
              }}
            />
          </div>
        ),
      },
      {
        path: "/sign-up/*",
        element: (
          <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-green-600 hover:bg-green-700 text-white",
                  card: "shadow-xl rounded-2xl border border-gray-200",
                },
              }}
            />
          </div>
        ),
      },
    ],
  },
]);

/* 🏁 Root App with ClerkProvider */
const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppLayout />
    </ClerkProvider>
  );
};

export default App;
