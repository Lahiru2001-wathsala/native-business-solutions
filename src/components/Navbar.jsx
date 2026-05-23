import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // TRACK WINDOW SIZE
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <Link to="/" className="flex items-center gap-3">
          <img src="/Loading.jpeg" alt="loading" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-bold text-lg">Native Business</h1>
            <p className="text-[10px] text-gray-400">Your Numbers, Our Expertise</p>
          </div>
        </Link>

        {/* DESKTOP MENU — only on desktop */}
        {isDesktop && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>

            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span className="text-sm text-gray-300">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition">
                Login
              </Link>
            )}
          </div>
        )}

        {/* MOBILE HAMBURGER — only on mobile */}
        {!isDesktop && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "1.5rem", background: "none", border: "none", color: "white", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* MOBILE MENU — only on mobile when open */}
      {!isDesktop && menuOpen && (
        <div style={{ background: "#0f172a", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Dashboard</Link>

          {user ? (
            <>
              <span className="text-sm text-gray-300">{user.email}</span>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                style={{ background: "#dc2626", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "none", color: "white", cursor: "pointer" }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              style={{ background: "#2563eb", padding: "0.75rem 1rem", borderRadius: "0.75rem", textAlign: "center" }}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}