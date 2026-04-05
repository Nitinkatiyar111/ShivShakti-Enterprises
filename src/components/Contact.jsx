import background from "../assets/background.jpeg";
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";
import QuotesForm from "./QuotesForm";
import map from "../assets/map.jpeg";
import { overlays } from "./theme";

function Contact() {
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
        className="pointer-events-none fixed left-0 top-0 z-10 hidden h-40 w-40 -translate-x-1/2 
        -translate-y-1/2 rounded-full bg-green-400/20 blur-3xl md:block"
      />

      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-slowZoom"
      />

      <div className={`absolute inset-0 ${overlays.contact}`} />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-lg text-gray-300 mx-auto">
            Have questions or want a solar solution? Reach out to us today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 md:p-7 backdrop-blur-md">
            <QuotesForm type="Contact Inquiry" />
          </div>

          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4 items-start">
              <Phone className="mt-0.5 h-5 w-5 text-green-400" />
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-300">
                  <a href="tel:+918400978691" className="hover:text-green-400 transition">
                    +91 8400978691
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <Mail className="mt-0.5 h-5 w-5 text-green-400" />
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-300 break-words">
                  <a
                    href="mailto:shivshaktipvt2002@gmail.com"
                    className="hover:text-green-400 transition"
                  >
                    shivshaktipvt2002@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start">
              <MapPin className="mt-0.5 h-5 w-5 text-green-400" />
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-gray-300">
                  Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <img
                src={map}
                alt="Location map of ShivShakti Enterprises, Lucknow"
                className="h-auto w-full max-h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;