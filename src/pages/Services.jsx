import { useState } from "react";

import {
  FaChartLine,
  FaFileInvoiceDollar,
  FaCalculator,
  FaUsers,
  FaMoneyCheckAlt,
  FaDatabase,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

export default function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const services = [

    {
      icon: <FaCalculator size={40} />,
      title: "Bookkeeping",
      desc: "Professional bookkeeping and transaction management solutions for businesses.",
      details: `
• Daily Transaction Recording
• Bank & Credit Card Reconciliation
• Accounts Payable Management
• Accounts Receivable Management
• Expense Tracking
• Cloud-based Bookkeeping
• Multi-Currency Accounting
• Custom Bookkeeping Services

Our bookkeeping services streamline financial management and ensure accurate transaction recording while helping businesses focus on growth.
      `,
    },

    {
      icon: <FaChartLine size={40} />,
      title: "Financial Reporting",
      desc: "Advanced financial reporting, forecasting and performance analysis services.",
      details: `
• Annual Financial Statements
• Quarterly Financial Statements
• Consolidated Financial Reporting
• Budget vs Actual Reporting
• Automated Reporting Solutions
• KPI Monitoring & Reporting
• Executive Reporting
• Financial Forecasting

We provide modern reporting systems and strategic financial analysis to improve decision-making and business growth.
      `,
    },

    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Payroll Services",
      desc: "Complete payroll processing and HR operational support solutions.",
      details: `
• Employee Payroll Processing
• Salary Calculations
• EPF / ETF Management
• Leave & Attendance Support
• HR Operational Assistance
• Payroll Reports
• Employee Payment Management

We ensure accurate and timely payroll management while maintaining compliance with regulations.
      `,
    },

    {
      icon: <FaFileInvoiceDollar size={40} />,
      title: "Tax & Regulatory",
      desc: "VAT, SSCL, taxation and regulatory compliance services.",
      details: `
• VAT & SSCL Returns
• Income Tax Returns
• Tax Planning & Advisory
• Regulatory Compliance Reporting
• Tax Risk Management
• Stamp Duty Returns
• Tax Dispute Resolution

We help businesses stay fully compliant with Sri Lankan tax and regulatory requirements.
      `,
    },

    {
      icon: <FaDatabase size={40} />,
      title: "Accounting Systems",
      desc: "Cloud and desktop accounting systems setup and support.",
      details: `
• QuickBooks Online
• Xero
• Sage 50cloud
• FreshBooks
• Wave Accounting
• Custom Accounting Systems
• System Integration & Support

We implement modern accounting systems that improve efficiency, reporting, and financial visibility.
      `,
    },

    {
      icon: <FaUsers size={40} />,
      title: "Financial Consultation",
      desc: "Strategic financial and business advisory services.",
      details: `
• Strategic Financial Planning
• Budgeting & Forecasting
• Investment Advisory
• Risk Management Consultation
• Cash Flow Management
• Cost Reduction Strategies
• Financial Modeling & Valuation

Our consultation services help businesses optimize financial performance and achieve long-term growth.
      `,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">

          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Our Services
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

            Comprehensive accounting, taxation,
            payroll and consultancy services designed
            for modern businesses.

          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                bg-white/70
                dark:bg-slate-900/60
                backdrop-blur-xl
                border
                border-white/20
                dark:border-slate-700/40
                p-10
                rounded-[35px]
                shadow-2xl
                "
              >

                {/* ICON */}
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8">

                  {service.icon}

                </div>

                {/* TITLE */}
                <h2 className="text-3xl font-bold mb-5">

                  {service.title}

                </h2>

                {/* DESC */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">

                  {service.desc}

                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="
                  flex
                  items-center
                  gap-3
                  text-blue-600
                  font-semibold
                  hover:gap-5
                  transition-all
                  duration-300
                  "
                >

                  Learn More

                  <FaArrowRight />

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>

        {selectedService && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-[999]
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-6
            "
          >

            {/* MODAL CARD */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
              relative
              max-w-3xl
              w-full
              bg-white
              dark:bg-slate-900
              rounded-[40px]
              shadow-2xl
              p-10
              overflow-y-auto
              max-h-[90vh]
              "
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedService(null)}
                className="
                absolute
                top-6
                right-6
                bg-red-500
                hover:bg-red-600
                text-white
                p-3
                rounded-full
                transition
                "
              >

                <FaTimes />

              </button>

              {/* ICON */}
              <div className="w-24 h-24 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8">

                {selectedService.icon}

              </div>

              {/* TITLE */}
              <h1 className="text-5xl font-black mb-8">

                {selectedService.title}

              </h1>

              {/* DETAILS */}
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg">

                {selectedService.details}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}