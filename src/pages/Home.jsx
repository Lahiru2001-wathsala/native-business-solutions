import Hero from "../components/Hero";
import ClientsSlider from "../components/ClientsSlider";
import TeamSection from "../components/TeamSection";
import ServiceModal from "../components/ServiceModal";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const [selectedService, setSelectedService] = useState(null);

  return (

    <div>

      {/* HERO */}
      <Hero />

      {/* CLIENTS */}
      <ClientsSlider />

      {/* SERVICES */}
      <section className="py-20 bg-white dark:bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">

              Complete financial and accounting solutions
              designed for modern businesses and enterprises.

            </p>

          </div>

          {/* SERVICE GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div
              data-aos="fade-up"
              className="
              bg-white/70
              dark:bg-slate-900/60
              backdrop-blur-xl
              shadow-2xl
              p-10
              rounded-[30px]
              hover:-translate-y-3
              duration-300
              border
              border-white/20
              dark:border-slate-700/50
              "
            >

              <h2 className="text-2xl font-bold mb-4 text-blue-600">

                Bookkeeping

              </h2>

              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">

                Professional bookkeeping and transaction management services.

              </p>

              <button
                onClick={() =>
                  setSelectedService({
                    title: "Bookkeeping",
                    description:
                      "Professional bookkeeping services including transaction recording, payroll management, account reconciliation and financial statement preparation.",
                  })
                }
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition duration-300"
              >

                Learn More

              </button>

            </div>

            {/* CARD 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
              bg-white/70
              dark:bg-slate-900/60
              backdrop-blur-xl
              shadow-2xl
              p-10
              rounded-[30px]
              hover:-translate-y-3
              duration-300
              border
              border-white/20
              dark:border-slate-700/50
              "
            >

              <h2 className="text-2xl font-bold mb-4 text-blue-600">

                Financial Reporting

              </h2>

              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">

                Detailed financial reports and forecasting solutions.

              </p>

              <button
                onClick={() =>
                  setSelectedService({
                    title: "Financial Reporting",
                    description:
                      "Advanced financial reporting, forecasting, variance analysis and business performance insights for enterprises.",
                  })
                }
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition duration-300"
              >

                Learn More

              </button>

            </div>

            {/* CARD 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="
              bg-white/70
              dark:bg-slate-900/60
              backdrop-blur-xl
              shadow-2xl
              p-10
              rounded-[30px]
              hover:-translate-y-3
              duration-300
              border
              border-white/20
              dark:border-slate-700/50
              "
            >

              <h2 className="text-2xl font-bold mb-4 text-blue-600">

                Payroll Services

              </h2>

              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">

                Employee payroll processing and HR support services.

              </p>

              <button
                onClick={() =>
                  setSelectedService({
                    title: "Payroll Services",
                    description:
                      "Complete payroll management, employee salary processing, EPF/ETF calculations and HR support services.",
                  })
                }
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition duration-300"
              >

                Learn More

              </button>

            </div>

          </div>

          {/* SHOW MORE SERVICES */}
          <div className="flex justify-center mt-14">

            <Link to="/services">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105 transition duration-300">

                Show More Services

              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div data-aos="zoom-in">

              <h1 className="text-5xl font-bold mb-3">

                50+

              </h1>

              <p className="text-lg">

                Clients

              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="200">

              <h1 className="text-5xl font-bold mb-3">

                7+

              </h1>

              <p className="text-lg">

                Years Experience

              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="400">

              <h1 className="text-5xl font-bold mb-3">

                100%

              </h1>

              <p className="text-lg">

                Professional Service

              </p>

            </div>

            <div data-aos="zoom-in" data-aos-delay="600">

              <h1 className="text-5xl font-bold mb-3">

                24/7

              </h1>

              <p className="text-lg">

                Support

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TEAM */}
      <TeamSection />

      {/* CTA */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900">

        <div
          data-aos="fade-up"
          className="
          max-w-5xl
          mx-auto
          px-6
          text-center
          bg-white/60
          dark:bg-slate-900/60
          backdrop-blur-xl
          border
          border-white/20
          dark:border-slate-700/40
          rounded-[40px]
          p-12
          shadow-2xl
          "
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-8">

            Ready To Grow Your Business?

          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">

            Partner with Native Business Solutions for
            professional financial and accounting services.

          </p>

          <Link to="/contact">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition duration-300 hover:scale-105">

              Get Started

            </button>

          </Link>

        </div>

      </section>

      {/* MODAL */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        description={selectedService?.description}
      />

    </div>

  );

}