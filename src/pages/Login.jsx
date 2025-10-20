import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-3xl p-8 w-[90%] sm:w-[400px] text-center"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-600 mb-6">
          Please sign in to continue shopping at{" "}
          <span className="font-semibold text-purple-700">E-Shop</span>
        </p>

        {/* Clerk SignIn Component */}
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-purple-700 hover:bg-purple-800 text-white rounded-lg py-2 font-semibold",
              card: "shadow-none border-none bg-transparent",
              headerTitle: "text-purple-700 font-bold text-2xl",
              headerSubtitle: "text-gray-600",
              socialButtonsBlockButton:
                "bg-white border border-gray-300 rounded-lg hover:bg-gray-50",
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Login;
