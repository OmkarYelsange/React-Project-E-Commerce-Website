import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-3xl p-8 w-[90%] sm:w-[400px] text-center"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-6">
          Create Your Account 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Join <span className="font-semibold text-purple-700">E-Shop</span> and
          start exploring amazing deals!
        </p>

        {/* Clerk SignUp Component */}
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
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

export default Signup;
