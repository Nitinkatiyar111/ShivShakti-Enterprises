import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import QuotesForm from "./QuotesForm";
import { useQuoteModal } from "../context/GlobalContext";

function GlobalModal() {
  const { isOpen, closeModal, title } = useQuoteModal();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="global-modal-title"
          >
            <div className="relative max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#020817]/90 p-5 backdrop-blur-xl sm:p-6">
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 rounded-full p-2 text-white transition hover:bg-white/10"
                aria-label="Close modal"
              >
                ✖
              </button>

              <h2
                id="global-modal-title"
                className="mb-4 pr-10 text-xl font-semibold text-white"
              >
                {title || "Get Quote"}
              </h2>

              <QuotesForm title={title} isOpen={isOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GlobalModal;