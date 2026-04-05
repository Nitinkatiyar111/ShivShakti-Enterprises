import background from "../assets/background.jpeg";
import { useEffect, useState } from "react";

const words = ["Clean Energy", "Green Energy", "Solar Energy"];

function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

function Background() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const installs = useCounter(150);
  const clients = useCounter(120);
  const years = useCounter(5);
  const capacity = useCounter(750);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text !== currentWord) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      if (text !== "") {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

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

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <div
        id="cursor-glow"
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-10 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/20 blur-3xl md:block"
      />

      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-slowZoom"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/70"
      />

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-green-400 sm:mb-6 sm:text-xs md:text-sm md:tracking-[0.4em]">
          Solar • Innovation • Sustainability
        </p>

        <h1 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
          <span className="block">Powering the Future</span>
          <span className="mt-3 block">
            with{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              {text || words[0]}
            </span>
            <span className="ml-1 inline-block h-[1em] w-[2px] bg-green-400 align-middle animate-blink" />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          ShivShakti Enterprises delivers cutting-edge solar solutions designed for efficiency, sustainability, and long-term savings.
        </p>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
              {installs}+
            </h3>
            <p className="mt-1 text-sm text-gray-300">Installations</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
              {clients}+
            </h3>
            <p className="mt-1 text-sm text-gray-300">Happy Clients</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
              {years}+
            </h3>
            <p className="mt-1 text-sm text-gray-300">Years Experience</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 sm:text-3xl">
              {capacity}+kW
            </h3>
            <p className="mt-1 text-sm text-gray-300">Capacity Installed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;