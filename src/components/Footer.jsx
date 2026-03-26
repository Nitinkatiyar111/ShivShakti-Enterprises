import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-[#020817] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent blur-3xl"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative border-b border-gray-800 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <div>
            <h2 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
              Switch to Solar.{" "}
              <span className="text-green-400">Save More.</span> Live Better.
            </h2>

            <p className="mt-4 text-gray-400 text-lg max-w-xl">
              Cut your electricity bills and embrace clean, reliable energy with{" "}
              <span className="text-white font-semibold">
                ShivShakti Enterprises
              </span>.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 rounded-xl font-semibold bg-green-600 overflow-hidden"
          >
            <span className="relative z-10">Get Free Quote</span>
            <span className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-100 transition duration-300"></span>
            <span className="absolute inset-0 rounded-xl border border-green-400 animate-ping opacity-20"></span>
          </motion.button>
        </div>
      </motion.div>
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              ShivShakti Enterprises
            </h3>
            <p className="text-green-400 text-xs tracking-widest mb-4">
              SAVE POWER
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering homes with sustainable solar solutions. Trusted EPC partner delivering affordable and efficient energy systems across India.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-5">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "About Us", "Products", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item} className="hover:text-green-400 transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-5">SERVICES</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Solar Maintenance",
                "Net Metering Setup",
                "Government Subsidy Help",
                "Solar Financing",
              ].map((item) => (
                <li key={item} className="hover:text-green-400 transition">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-5">CONTACT US</h4>
            <div className="space-y-6 text-gray-400 text-sm">

              <div className="flex gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <Phone className="text-green-400 w-5 h-5" />
                </div>
                <div>
                  <div className="group-hover:text-white transition">+91 8400978691</div>
                  <div className="group-hover:text-white transition">+91 9450027292</div>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <Mail className="text-green-400 w-5 h-5" />
                </div>
                <span className="group-hover:text-white transition">
                  shivshaktipvt2002@gmail.com
                </span>
              </div>

              <div className="flex gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <MapPin className="text-green-400 w-5 h-5" />
                </div>
                <span>Lucknow, Uttar Pradesh</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      <div className="relative border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">

          <p>© 2026 ShivShakti Enterprises. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-green-400 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-green-400 cursor-pointer transition">Terms of Service</span>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;