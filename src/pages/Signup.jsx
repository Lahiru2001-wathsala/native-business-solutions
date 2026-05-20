import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../firebase/firebase";

import { FcGoogle } from "react-icons/fc";

export default function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // EMAIL SIGNUP
  const handleSignup = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      alert("Account created successfully ✅");

      navigate("/");

    } catch (error) {

      alert(error.message);

    }

    setLoading(false);

  };

  // GOOGLE SIGNUP
  const handleGoogleSignup = async () => {

    try {

      await signInWithPopup(auth, googleProvider);

      alert("Google login successful ✅");

      navigate("/");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6 py-24">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[35px] shadow-2xl p-10 border border-slate-800">

        <h1 className="text-4xl font-black text-center mb-3 text-black dark:text-white">

          Create Account

        </h1>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">

          Sign up to continue

        </p>

        {/* FORM */}
        <form
          onSubmit={handleSignup}
          className="space-y-6"
        >

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="
            w-full
            p-4
            rounded-2xl
            bg-slate-100
            dark:bg-slate-800
            border
            border-transparent
            focus:border-blue-600
            outline-none
            "
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
            w-full
            p-4
            rounded-2xl
            bg-slate-100
            dark:bg-slate-800
            border
            border-transparent
            focus:border-blue-600
            outline-none
            "
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-4
            rounded-2xl
            font-semibold
            transition
            "
          >

            {loading ? "Creating..." : "Create Account"}

          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-700"></div>

          <span className="text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-slate-700"></div>

        </div>

        {/* GOOGLE BUTTON */}
        <button
          onClick={handleGoogleSignup}
          className="
          w-full
          border
          border-gray-300
          dark:border-slate-700
          py-4
          rounded-2xl
          flex
          items-center
          justify-center
          gap-3
          font-medium
          hover:bg-slate-100
          dark:hover:bg-slate-800
          transition
          "
        >

          <FcGoogle size={24} />

          Continue with Google

        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}