import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BackgroundParticles from "./components/BackgroundParticles";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <BrowserRouter>

      <div className="relative min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-all duration-300 overflow-x-hidden">

        {/* BACKGROUND PARTICLES */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

          <BackgroundParticles />

        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 w-full flex flex-col min-h-screen">

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1 w-full overflow-hidden pt-[72px]">

            <Routes>

              {/* HOME */}
              <Route
                path="/"
                element={<Home />}
              />

              {/* ABOUT */}
              <Route
                path="/about"
                element={<About />}
              />

              {/* SERVICES */}
              <Route
                path="/services"
                element={<Services />}
              />

              {/* CONTACT */}
              <Route
                path="/contact"
                element={<Contact />}
              />

              {/* LOGIN */}
              <Route
                path="/login"
                element={<Login />}
              />

              {/* SIGNUP */}
              <Route
                path="/signup"
                element={<Signup />}
              />

              {/* PROTECTED DASHBOARD */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>

                    <Dashboard />

                  </ProtectedRoute>
                }
              />

            </Routes>

          </main>

          {/* SCROLL BUTTON */}
          <ScrollToTopButton />

          {/* FOOTER */}
          <Footer />

        </div>

      </div>

    </BrowserRouter>

  );

}