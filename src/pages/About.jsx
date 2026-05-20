import { motion } from "framer-motion";

export default function About() {

  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-black mb-8"
          >

            About Us

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >

            Native Business Solutions provides
            professional accounting, bookkeeping,
            payroll and financial consultancy services
            for businesses across Sri Lanka.

          </motion.p>

        </div>

      </section>

      {/* COMPANY STORY */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            data-aos="fade-right"
          >

            <img
              src="/logo.jpeg"
              alt="company"
              className="rounded-[40px] shadow-2xl w-full max-w-md mx-auto"
            />

          </motion.div>

          {/* RIGHT */}
          <motion.div
            data-aos="fade-left"
          >

            <h1 className="text-4xl font-bold mb-8">
              Who We Are
            </h1>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-6">

              We are a modern financial consultancy
              company focused on helping businesses
              manage their finances professionally and efficiently.

            </p>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">

              Our experienced team provides accounting,
              taxation, payroll and business advisory
              services with modern digital solutions.

            </p>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div data-aos="zoom-in">

              <h1 className="text-5xl font-bold mb-3">
                50+
              </h1>

              <p>
                Clients
              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="200">

              <h1 className="text-5xl font-bold mb-3">
                7+
              </h1>

              <p>
                Years Experience
              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="400">

              <h1 className="text-5xl font-bold mb-3">
                100%
              </h1>

              <p>
                Professional Service
              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="600">

              <h1 className="text-5xl font-bold mb-3">
                24/7
              </h1>

              <p>
                Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10">

          {/* MISSION */}
          <div
            data-aos="fade-up"
            className="
            bg-white/70
            dark:bg-slate-900/60
            backdrop-blur-xl
            p-10
            rounded-[35px]
            shadow-2xl
            border
            border-white/20
            dark:border-slate-700/40
            "
          >

            <h1 className="text-3xl font-bold mb-6 text-blue-600">
              Our Mission
            </h1>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">

              To empower businesses with reliable,
              transparent and innovative financial solutions.

            </p>

          </div>

          {/* VISION */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="
            bg-white/70
            dark:bg-slate-900/60
            backdrop-blur-xl
            p-10
            rounded-[35px]
            shadow-2xl
            border
            border-white/20
            dark:border-slate-700/40
            "
          >

            <h1 className="text-3xl font-bold mb-6 text-blue-600">
              Our Vision
            </h1>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">

              To become Sri Lanka’s leading modern
              business and financial consultancy provider.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}