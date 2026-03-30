import background from '../assets/background.jpeg';

function Background() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={background}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        alt="background"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <p className="uppercase tracking-[0.3em] text-green-400 text-xs sm:text-sm mb-4">
         • Solar Solutions • Innovation • Sustainability
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
          Powering the Future with{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Clean Energy
          </span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg">
          ShivShakti Enterprises delivers cutting-edge solar solutions designed
          for efficiency, sustainability, and long-term savings.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-300 shadow-lg hover:scale-105">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white/30 hover:border-green-400 text-white rounded-full transition duration-300 backdrop-blur-md hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;