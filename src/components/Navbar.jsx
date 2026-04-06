import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Phone, Menu, X } from "lucide-react";
import QuotesForm from "./QuotesForm";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

      setScrollProgress(progress);
      setScrolled(scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]); 

  useEffect(() => {
    document.body.style.overflow = open || showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, showForm]);

  const handleMouseMove = (e, el) => {
    if (window.innerWidth < 768) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
  };

  const resetTransform = (el) => {
    el.style.transform = "translate(0,0) scale(1)";
  };

  const navItems = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/40 py-2 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,255,150,0.08)]"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <NavLink to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="ShivShakti Enterprises logo"
              className={`rounded-full object-cover transition-all duration-500 ${
                scrolled ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16"
              }`}
            />

            <span className="truncate text-base font-semibold tracking-wide text-green-500 sm:text-lg md:text-xl">
              ShivShakti Enterprises
            </span>
          </NavLink>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className="group relative"
              >
                {({ isActive }) => (
                  <>
                    <span
                      onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                      onMouseLeave={(e) => resetTransform(e.currentTarget)}
                      className={`inline-block font-body transition duration-200 ${
                        isActive ? "text-green-400" : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-400
                         to-emerald-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+918400978691"
              className="hidden items-center gap-2 text-sm text-green-400 transition
               hover:text-green-300 sm:flex"
            >
              <Phone className="h-4 w-4" />
              +91 8400978691
            </a>

            <button
              onClick={() => setShowForm(true)}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTransform(e.currentTarget)}
              className="relative hidden overflow-hidden rounded-full bg-gradient-to-r
               from-green-400 to-emerald-500 px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110 md:block"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 transition hover:opacity-100" />
            </button>

            <button
              className="rounded-md p-2 text-green-400 transition hover:bg-white/5 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-7 w-7 text-green-400" />
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-400
           to-emerald-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl 
          transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-6">
          <span className="text-lg font-semibold text-white">Menu</span>

          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-green-400 transition hover:bg-white/5"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 px-6 text-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-green-400" : "text-white hover:text-green-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="tel:+918400978691"
            className="mt-4 flex items-center gap-2 text-green-400"
          >
            <Phone className="h-5 w-5" />
            +91 8400978691
          </a>

          <button
            onClick={() => {
              setOpen(false);
              setShowForm(true);
            }}
            className="mt-2 rounded-full bg-gradient-to-r from-green-400
             to-emerald-500 px-6 py-3 font-semibold text-black"
          >
            Get Quote
          </button>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-form-title"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-3 top-2 text-xl text-black"
              aria-label="Close quote form"
            >
              ✖
            </button>

            <h2 id="quote-form-title" className="mb-4 text-xl font-semibold text-black">
              Get Quote
            </h2>

            <QuotesForm type="Quote" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;