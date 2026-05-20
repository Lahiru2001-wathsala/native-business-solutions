import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center">

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-full mb-8"
            >

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

              <span className="text-sm text-gray-200">
                Trusted Financial Solutions Provider
              </span>

            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight"
            >

              Your Numbers,

              <span className="block text-blue-500 mt-2">
                Our Expertise
              </span>

            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >

              Professional accounting, payroll,
              bookkeeping and financial consultancy
              solutions designed for modern businesses.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >

              <Link to="/services">

                <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-2xl font-semibold transition duration-300 shadow-2xl hover:scale-105">

                  Explore Services

                </button>

              </Link>

              <Link to="/contact">

                <button className="border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-3 rounded-2xl hover:bg-white hover:text-black transition duration-300">

                  Contact Us

                </button>

              </Link>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-14 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
            >

              <div>

                <h1 className="text-3xl font-bold text-blue-500">
                  50+
                </h1>

                <p className="text-gray-400 mt-2">
                  Clients
                </p>

              </div>

              <div>

                <h1 className="text-3xl font-bold text-blue-500">
                  7+
                </h1>

                <p className="text-gray-400 mt-2">
                  Years
                </p>

              </div>

              <div>

                <h1 className="text-3xl font-bold text-blue-500">
                  24/7
                </h1>

                <p className="text-gray-400 mt-2">
                  Support
                </p>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* MAIN CARD */}
            <div className="relative bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[40px] p-8 lg:p-10 shadow-2xl w-full max-w-sm">

              <img
                src="/logo.jpeg"
                alt="logo"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
              />

              <div className="mt-8 space-y-4">

                <div className="bg-white/10 p-4 rounded-2xl flex justify-between items-center">

                  <span className="text-gray-300">
                    Financial Accuracy
                  </span>

                  <span className="text-green-400 font-bold">
                    99%
                  </span>

                </div>

                <div className="bg-white/10 p-4 rounded-2xl flex justify-between items-center">

                  <span className="text-gray-300">
                    Client Satisfaction
                  </span>

                  <span className="text-blue-400 font-bold">
                    Excellent
                  </span>

                </div>

                <div className="bg-white/10 p-4 rounded-2xl flex justify-between items-center">

                  <span className="text-gray-300">
                    Active Support
                  </span>

                  <span className="text-cyan-400 font-bold">
                    24/7
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}