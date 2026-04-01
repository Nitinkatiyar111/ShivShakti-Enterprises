import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-[#020817] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent blur-3xl"></div>
      <div className="relative py-24 px-6 border-b border-white/10 text-center">

        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-nowrap md:whitespace-nowrap">
            Switch to Solar.{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Save More.
            </span>{" "}
            Live Better.
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Cut your electricity bills and embrace clean, reliable energy with{" "}
            <span className="text-white font-semibold">
              ShivShakti Enterprises
            </span>.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="relative px-10 py-4 rounded-2xl font-heading font-semibold text-lg bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-[0_10px_40px_rgba(0,255,150,0.25)] transition hover:scale-105 overflow-hidden">
              <span className="relative z-10">Get Free Quote</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></span>
              <span className="absolute inset-0 rounded-2xl border border-green-300 opacity-20"></span>
            </button>
          </div>

        </div>
      </div>
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-heading font-semibold mb-3">
              ShivShakti Enterprises
            </h3>
            <p className="text-green-400 text-xs tracking-widest mb-4 font-body">
              SAVE POWER
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-body">
              Empowering homes with sustainable solar solutions. Trusted EPC partner delivering affordable and efficient energy systems across India.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-heading font-semibold mb-5">QUICK LINKS</h4>

            <ul className="space-y-3 text-gray-400 text-sm font-body">
              {["Home", "About Us", "Products", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item} className="hover:text-green-400 transition cursor-pointer hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-heading font-semibold mb-5">SERVICES</h4>

            <ul className="space-y-3 text-gray-400 text-sm font-body">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Solar Maintenance",
                "Net Metering Setup",
                "Government Subsidy Help",
                "Solar Financing",
              ].map((item) => (
                <li key={item} className="hover:text-green-400 transition hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h4 className="font-heading font-semibold mb-5">CONTACT US</h4>

            <div className="space-y-6 text-gray-400 text-sm font-body">

              <div className="flex gap-3">
                <Phone className="text-green-400 mt-1" />
                <div>
                  <div>+91 8400978691</div>
                  <div>+91 9450027292</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-green-400 mt-1" />
                <div>shivshaktipvt2002@gmail.com</div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-green-400 mt-1" />
                <div>Lucknow, Uttar Pradesh</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3 font-body">

          <p>© 2026 ShivShakti Enterprises. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-green-400 cursor-pointer transition hover:underline">
              Privacy Policy
            </span>
            <span className="hover:text-green-400 cursor-pointer transition hover:underline">
              Terms of Service
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;