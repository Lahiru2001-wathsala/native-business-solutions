import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  // USER SESSION
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    return () => unsubscribe();

  }, []);

  // LOGOUT
  const handleLogout = async () => {

    try {

      await signOut(auth);

      alert("Logged out successfully ✅");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white z-[9999] border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.jpeg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />

          <div>

            <h1 className="font-bold text-lg">
              Native Business
            </h1>

            <p className="text-[10px] text-gray-400">
              Your Numbers, Our Expertise
            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="flex items-center gap-8 max-md:hidden">

          
          <Link
            to="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-blue-400 transition"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </Link>

          {user ? (

            <div className="flex items-center gap-4">

              <div className="text-sm text-gray-300">

                {user.email}

              </div>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition"
              >

                Logout

              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition"
            >

              Login

            </Link>

          )}

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden max-md:block text-2xl"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="hidden max-md:flex bg-slate-900 px-6 py-6 flex-col gap-6">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {user ? (

            <>

              <div className="text-sm text-gray-300">

                {user.email}

              </div>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-600 px-4 py-3 rounded-xl text-center"
              >

                Logout

              </button>

            </>

          ) : (

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 px-4 py-3 rounded-xl text-center"
            >

              Login

            </Link>

          )}

        </div>

      )}

    </nav>

  );

}