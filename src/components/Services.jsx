import { Sun, Building, Wrench, BadgeCheck } from "lucide-react";
import { useQuoteModal } from "../context/GlobalContext";

function Services() {
  const { openModal } = useQuoteModal();

  const services = [
    {
      icon: Sun,
      title: "Residential Solar Solutions",
      desc: "Power your home with efficient rooftop solar systems designed to reduce electricity bills and ensure long-term energy independence.",
      highlight: "Save up to 80% on electricity bills",
    },
    {
      icon: Building,
      title: "Commercial & Industrial Solar",
      desc: "Optimize operational costs with large-scale solar installations tailored for businesses, factories, and commercial spaces.",
      highlight: "Reduce operational costs significantly",
    },
    {
      icon: Wrench,
      title: "Solar Maintenance & Support",
      desc: "Ensure maximum performance with regular system monitoring, maintenance, and quick troubleshooting support.",
      highlight: "Increase system lifespan & efficiency",
    },
    {
      icon: BadgeCheck,
      title: "Government Subsidy Assistance",
      desc: "We handle documentation and approvals to help you avail maximum government subsidies and financial benefits.",
      highlight: "Hassle-free subsidy process",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="max-w-6xl px-4 pt-24 mx-auto sm:px-6 md:px-8 sm:pt-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl tracking-tight font-heading font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base md:text-lg">
            Complete solar solutions designed for efficiency, savings, and long-term reliability.
          </p>
        </div>

        <div className="mt-16 space-y-8 sm:mt-20 sm:space-y-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col p-4 rounded-xl border-b border-white/10 bg-white/5 hover:bg-white/10 sm:flex-row sm:gap-5 sm:p-5 sm:rounded-lg"
            >
              <div className="p-3 rounded-xl bg-green-400/10 sm:p-4">
                <s.icon className="text-green-400" size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 sm:text-base max-w-xl">
                  {s.desc}
                </p>
                <p className="mt-2 text-xs font-medium text-green-400 sm:text-sm">
                  {s.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center sm:mt-24">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            Ready to switch to solar?
          </h2>
          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Get a customized solar solution tailored to your needs.
          </p>
          <button
            onClick={() => openModal("Start Your Solar Journey")}
            className="mt-6 px-6 py-3 font-semibold text-sm rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black transition hover:scale-105 sm:px-8 sm:text-base"
          >
            Start Your Solar Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;