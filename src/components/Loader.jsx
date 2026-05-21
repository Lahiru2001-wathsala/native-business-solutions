export default function Loader() {

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">

      <div className="text-center">

        {/* LOGO */}
        <img
          src="/Loading.jpeg"
          alt="loading"
          className="w-32 h-32 rounded-full mx-auto mb-8 animate-pulse"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Native Business Solutions
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 text-lg">
          Your Numbers, Our Expertise
        </p>

        {/* LOADING */}
        <div className="mt-10 flex justify-center gap-3">

          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>

          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>

          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>

        </div>

      </div>

    </div>
  );
}