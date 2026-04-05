import { useState, useEffect } from "react";
import { User, Phone, MessageSquare, CheckCircle } from "lucide-react";

function QuotesForm({ title = "Get Your Free Solar Quote", isOpen }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    setStep(2);
  };

  const handleSubmit = () => {
    const phoneNumber = "9049266890";

    const text = `Hello, I want a solar quote.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  const inputStyle =
    "w-full rounded-xl border border-green-400/40 bg-white/5 pl-10 pr-4 pt-5 pb-2 text-white caret-green-400 placeholder-gray-400 transition focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400";

  return (
    <div>
      {submitted ? (
        <div className="space-y-4 py-10 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
          <h2 className="text-xl font-semibold text-white">
            Request Sent Successfully
          </h2>
        </div>
      ) : (
        <div className="mx-auto max-w-md space-y-5">
          <h2 className="text-center text-xl font-semibold text-white">
            {title}
          </h2>

          <div className="flex justify-center gap-2">
            <div
              className={`h-2 w-6 rounded ${
                step === 1 ? "bg-green-400" : "bg-gray-500"
              }`}
            />
            <div
              className={`h-2 w-6 rounded ${
                step === 2 ? "bg-green-400" : "bg-gray-500"
              }`}
            />
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              <button
                onClick={nextStep}
                className="w-full rounded-xl bg-green-400 py-3 font-semibold text-black transition hover:scale-105"
              >
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-green-400/40 bg-[#0f172a] p-3 text-white focus:border-green-400 focus:outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="Residential Solar">Residential Solar</option>
                  <option value="Commercial Solar">Commercial Solar</option>
                  <option value="Maintenance">Maintenance</option>
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
                  ▼
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                <textarea
                  name="message"
                  placeholder="Your Requirement"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className={inputStyle}
                />
              </div>

              <div className="mt-2 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 rounded-xl border border-white/20 bg-gradient-to-r from-green-400 to-emerald-500 py-3 font-semibold text-black transition hover:border-green-400"
                >
                  Back
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-1/2 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuotesForm;