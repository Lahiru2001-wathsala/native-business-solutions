import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "repeat(4, 1fr)" : "1fr",
          gap: "3.5rem",
        }}>

          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/Loading.jpeg" alt="Loading" className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="text-2xl font-bold">Native Business</h2>
                <p className="text-gray-400 text-sm">Your Numbers, Our Expertise</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional accounting, payroll and financial
              consultancy solutions for modern businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4 text-gray-400">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <div className="flex flex-col gap-4 text-gray-400">
              <p>Bookkeeping</p>
              <p>Payroll Services</p>
              <p>Financial Reporting</p>
              <p>Tax Consultation</p>
              <p>Accounting Systems</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="flex flex-col gap-5 text-gray-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+94 071 649 0532</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>nativebiz.info@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>Malabe, Sri Lanka</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 Native Business Solutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}