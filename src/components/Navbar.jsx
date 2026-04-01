import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      setScrollProgress((scrollY / maxScroll) * 100);
      setScrolled(scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
  };

  const resetTransform = (el) => {
    el.style.transform = "translate(0,0) scale(1)";
  };

  const linkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 font-body ${
      isActive ? "text-green-400" : "text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,255,150,0.08)] py-2"
            : "py-4"
        }`}
        style={{
          backgroundColor: `rgba(0,0,0,${scrolled ? 0.4 : 0})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className={`rounded-full object-cover transition-all duration-500 ${
                scrolled ? "h-12 w-12" : "h-16 w-16"
              }`}
            />
            <span className="font-heading font-semibold text-lg md:text-xl tracking-wide text-green-600">
                  ShivShakti Enterprises
                 </span>
          </NavLink>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            {["/", "/about", "/services", "/projects", "/contact"].map((path, i) => {
              const labels = ["Home", "About", "Services", "Projects", "Contact"];
              return (
                <NavLink key={path} to={path} className="group relative">
                  <span
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => resetTransform(e.currentTarget)}
                    className={`inline-block transition duration-200 font-body ${
                      window.location.pathname === path
                        ? "text-green-400"
                        : "text-white"
                    }`}
                  >
                    {labels[i]}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              );
            })}

          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918400978691"
              className="hidden sm:flex items-center gap-2 text-green-400 text-sm font-body hover:text-green-300 transition"
            >
              <Phone className="w-4 h-4" />
              +91 8400978691
            </a>
            <button
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTransform(e.currentTarget)}
              className="hidden md:block relative px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-heading font-semibold text-sm overflow-hidden transition hover:brightness-110"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></span>
            </button>
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </nav>
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="text-lg font-heading font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col items-center gap-10 mt-16 text-xl font-body">

          {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
            <NavLink
              key={i}
              to={["/", "/about", "/services", "/projects", "/contact"][i]}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="hover:text-green-400 transition"
            >
              {item}
            </NavLink>
          ))}

          <a
            href="tel:+918400978691"
            className="flex items-center gap-2 text-green-400 mt-8"
          >
            <Phone />
            +91 8400978691
          </a>

        </div>
      </div>
    </>
  );
}

export default Navbar;