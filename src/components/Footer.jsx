import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import QuotesForm from "./QuotesForm";

function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <footer className="relative bg-[#020817] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent blur-3xl" />

        <div className="relative border-b border-white/10 px-6 py-16 text-center md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Switch to Solar.{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Save More.
              </span>{" "}
              Live Better.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-400 sm:text-lg">
              Cut your electricity bills and embrace clean, reliable energy with{" "}
              <span className="font-semibold text-white">
                ShivShakti Enterprises
              </span>.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="relative rounded-2xl px-6 py-3.5 font-heading text-base font-semibold text-black transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400/50 sm:px-8 sm:py-4 sm:text-lg md:px-10"
                style={{
                  background: "linear-gradient(90deg, #00C853, #00E676)",
                  boxShadow: "0 10px 40px rgba(0,255,150,0.25)",
                }}
              >
                <span className="relative z-10">Get Free Quote</span>
                <span className="absolute inset-0 rounded-2xl border border-green-300 opacity-20" />
                <span className="absolute inset-0 bg-white/20 opacity-0 transition hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative px-6 py-12 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 font-heading text-xl font-semibold md:text-2xl">
                ShivShakti Enterprises
              </h3>
              <p className="mb-3 font-body text-xs uppercase tracking-widest text-green-400">
                SAVE POWER
              </p>
              <p className="font-body text-sm leading-relaxed text-gray-400">
                Empowering homes with sustainable solar solutions. Trusted EPC
                partner delivering affordable and efficient energy systems
                across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 font-heading text-base font-semibold sm:text-lg">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 font-body text-sm text-gray-400 sm:space-y-3">
                {["Home", "About Us", "Products", "Services", "FAQ", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer transition hover:translate-x-1 hover:text-green-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 font-heading text-base font-semibold sm:text-lg">
                SERVICES
              </h4>
              <ul className="space-y-2 font-body text-sm text-gray-400 sm:space-y-3">
                {[
                  "Residential Solar",
                  "Commercial Solar",
                  "Solar Maintenance",
                  "Net Metering Setup",
                  "Government Subsidy Help",
                  "Solar Financing",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer transition hover:translate-x-1 hover:text-green-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 font-heading text-base font-semibold sm:text-lg">
                CONTACT US
              </h4>
              <div className="space-y-4 font-body text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-green-400" />
                  <div>
                    <div>+91 8400978691</div>
                    <div>+91 9450027292</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-green-400" />
                  <div className="break-words">shivshaktipvt2002@gmail.com</div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-green-400" />
                  <div>Lucknow, Uttar Pradesh</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 font-body text-sm text-gray-500 md:flex-row md:justify-between md:gap-0">
            <p>© 2026 ShivShakti Enterprises. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="cursor-pointer transition hover:text-green-400 hover:underline">
                Privacy Policy
              </span>
              <span className="cursor-pointer transition hover:text-green-400 hover:underline">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setShowForm(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-black">Get Free Quote</h3>
              <button
                onClick={() => setShowForm(false)}
                className="ml-auto rounded-full p-1 text-gray-600 hover:bg-gray-100"
                aria-label="Close quote form"
              >
                ✖
              </button>
            </div>

            <div className="mt-4">
              <QuotesForm type="Free Quote" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;