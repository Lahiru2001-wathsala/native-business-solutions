import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialBar() {

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">

      {/* FACEBOOK */}
      <a
        href="#"
        className="bg-blue-600 hover:scale-110 transition-all duration-300 text-white p-3 rounded-full shadow-xl"
      >
        <FaFacebookF size={18} />
      </a>

      {/* INSTAGRAM */}
      <a
        href="#"
        className="bg-pink-500 hover:scale-110 transition-all duration-300 text-white p-3 rounded-full shadow-xl"
      >
        <FaInstagram size={18} />
      </a>

      {/* LINKEDIN */}
      <a
        href="#"
        className="bg-blue-800 hover:scale-110 transition-all duration-300 text-white p-3 rounded-full shadow-xl"
      >
        <FaLinkedinIn size={18} />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/94716490532"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:scale-110 transition-all duration-300 text-white p-3 rounded-full shadow-xl"
      >
        <FaWhatsapp size={18} />
      </a>

    </div>
  );
}