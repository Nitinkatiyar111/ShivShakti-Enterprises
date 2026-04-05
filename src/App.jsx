import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteModalProvider } from "./context/GlobalContext";
import GlobalModel from "./components/GlobalModel";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Project";
import Services from "./components/Services"

function App() {
  return (
    <QuoteModalProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>

        <Footer />

        <GlobalModel />

      </BrowserRouter>
    </QuoteModalProvider>
  );
}

export default App;