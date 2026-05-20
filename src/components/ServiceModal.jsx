import { FaTimes } from "react-icons/fa";

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[99999] px-6">

      <div className="bg-white dark:bg-slate-900 max-w-2xl w-full p-10 rounded-[40px] relative shadow-2xl border border-gray-200 dark:border-slate-800">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl hover:text-red-500 transition"
        >

          <FaTimes />

        </button>

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          {description}
        </p>

        {/* BUTTON */}
        <button
          onClick={onClose}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition"
        >
          Close
        </button>

      </div>

    </div>
  );
}