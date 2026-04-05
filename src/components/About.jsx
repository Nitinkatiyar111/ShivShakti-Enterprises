import background from "../assets/background.jpeg";
import founder1 from "../assets/founder1.jpeg";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpeg";
import founder4 from "../assets/founder4.jpeg";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      if (glow && window.innerWidth >= 768) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const founders = [
    {
      img: founder1,
      role: "Founder",
      desc: "5+ years in solar innovation",
    },
    {
      img: founder2,
      role: "Co-Founder",
      desc: "Execution & operations expert",
    },
    {
      img: founder3,
      role: "Co-Founder",
      desc: "Focused on sustainable growth",
    },
    {
      img: founder4,
      role: "Marketing Lead",
      desc: "Driving brand and customer engagement",
    },
  ];

  const stats = [
    { value: "150+", label: "Installations" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div
        id="cursor-glow"
        className="pointer-events-none fixed left-0 top-0 z-10 hidden h-52 w-52 
        -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/20 blur-3xl md:block"
        aria-hidden="true"
      />

      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover scale-110"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/90
         via-black/80 to-black/95"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 
          bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
            About ShivShakti
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Building a sustainable future with intelligent solar energy solutions.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute inset-0 rounded-3xl bg-green-400/10 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8
           text-center backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-gray-300">
              ShivShakti Enterprises empowers homes and businesses with
              high-performance solar systems designed for long-term efficiency,
              cost savings, and environmental impact.
            </p>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="mb-14 text-center text-3xl md:text-4xl">
            Meet the Leadership
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((f, i) => (
              <div
                key={i}
                className="group relative h-full overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-green-400/10 blur-2xl 
                opacity-0 transition duration-500 md:group-hover:opacity-100" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl 
                border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 md:group-hover:scale-[1.03]">
                  <div className="relative">
                    <img
                      src={f.img}
                      alt={f.role}
                      className="h-[300px] w-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-6 text-center">
                    <p className="text-sm text-green-400">{f.role}</p>

                    <p className="mt-3 text-sm text-gray-400 opacity-100 transition 
                    duration-500 md:opacity-0 md:group-hover:opacity-100">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl md:text-3xl">Our Vision</h2>
          <p className="leading-relaxed text-gray-300">
            To redefine energy consumption by making solar solutions accessible,
            intelligent, and future-ready for every household and business.
          </p>
        </section>

        <section className="mt-20 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-green-400/10 blur-xl opacity-0 transition 
              md:group-hover:opacity-100" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-2xl text-green-400">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default About;