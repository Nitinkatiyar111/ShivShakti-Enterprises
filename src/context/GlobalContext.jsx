import { createContext, useContext, useState } from "react";

const GlobalContext = createContext(null);

export const useQuoteModal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }

  return context;
};

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openModal = (customTitle) => {
    setTitle(customTitle || "Get Your Free Solar Quote");
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <GlobalContext.Provider value={{ isOpen, openModal, closeModal, title }}>
      {children}
    </GlobalContext.Provider>
  );
}