export default function BackgroundParticles() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* PARTICLE 1 */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>

      {/* PARTICLE 2 */}
      <div className="absolute top-[40%] right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-[140px] animate-pulse"></div>

      {/* PARTICLE 3 */}
      <div className="absolute bottom-10 left-[30%] w-80 h-80 bg-indigo-500/30 rounded-full blur-[130px] animate-pulse"></div>

      {/* PARTICLE 4 */}
      <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-blue-400/30 rounded-full blur-[120px] animate-pulse"></div>

    </div>
  );
}