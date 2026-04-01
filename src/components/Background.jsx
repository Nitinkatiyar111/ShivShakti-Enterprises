import background from "../assets/background.jpeg";
import { useEffect, useState } from "react";

const words = ["Clean Energy", "Green Energy", "Solar Energy"];

function Background() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 70);

      if (text === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 35);

      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);


  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-40 h-40 bg-green-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-10"
      ></div>
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 animate-fadeUp">
        <p className="font-body uppercase tracking-[0.4em] text-green-400 text-xs sm:text-sm mb-6">
          • Solar • Innovation • Sustainability
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] max-w-5xl tracking-tight">

          <span className="block">Powering the Future</span>

          <span className="block mt-3">
            with{" "}
            <span className="bg-[length:200%_200%] bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent animate-gradient">
              {text}
            </span>
            <span className="inline-block w-[2px] h-[1em] bg-green-400 ml-1 animate-blink"></span>
          </span>

        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg font-body leading-relaxed">
          ShivShakti Enterprises delivers cutting-edge solar solutions designed
          for efficiency, sustainability, and long-term savings.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <button className="font-heading relative px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-black overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,255,150,0.3)]">
            Get Started
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></span>
          </button>
          <button className="font-body px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-md hover:border-green-400 hover:bg-white/10 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default Background;