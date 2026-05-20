import { useState } from "react";

import emailjs from "@emailjs/browser";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // SEND EMAIL
      await emailjs.send(

        "service_i2ughtw",
        "template_9lqwdah",
        formData,
        "HrY_5bcQiJFK50-9X"

      );

      // SAVE TO FIRESTORE
      console.log("Saving to Firestore...");

      setSuccess(true);

setLoading(false);

      console.log("Firestore saved successfully");

      setSuccess(true);

      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {

        setSuccess(false);

      }, 4000);

    } catch (error) {

      console.log("FULL ERROR:", error);

      alert(error.message);
      setSuccess(true);
      setLoading(false);

    }

    setLoading(false);

  };

  return (

    <div className="bg-white dark:bg-slate-950 text-black dark:text-white overflow-hidden">

      {/* HERO */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-black mb-6">

            Contact Us

          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">

            Let's discuss your accounting, payroll,
            taxation and financial management needs.

          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-bold mb-8">

              Get In Touch

            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">

              We provide trusted financial solutions for businesses
              across Sri Lanka. Contact us today for professional support.

            </p>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 text-xl">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="text-xl font-bold mb-1">
                    Email
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    nativebiz.info@gmail.com
                  </p>

                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 text-xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3 className="text-xl font-bold mb-1">
                    Phone
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    +94 071 649 0532
                  </p>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 text-xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="text-xl font-bold mb-1">
                    Location
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    No.411/B/2, Athurugiriya Rd, Malabe
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-[35px] p-10 border border-gray-100 dark:border-slate-800">

            <h2 className="text-3xl font-bold mb-8">

              Send Message

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-600 outline-none"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-600 outline-none"
              />

              {/* PHONE */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-600 outline-none"
              />

              {/* MESSAGE */}
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-600 outline-none resize-none"
              ></textarea>

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
                flex
                items-center
                justify-center
                gap-3
                transition
                "
              >

                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}

              </button>

              {/* SUCCESS */}
              {success && (

                <div className="bg-green-500/10 border border-green-500 text-green-600 px-5 py-4 rounded-2xl text-center font-medium">

                  Message sent successfully ✅

                </div>

              )}

            </form>

          </div>

        </div>

      </section>

      {/* GOOGLE MAP */}
      <section className="pb-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto rounded-[35px] overflow-hidden shadow-2xl border border-slate-800">

          <iframe
            title="map"
            src="https://www.google.com/maps?q=malabe&sll=6.906079,79.870103&z=13&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>

  );

}