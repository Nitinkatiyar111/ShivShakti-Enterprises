import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/about" element={<h1 className="p-10">About</h1>} />
        <Route path="/services" element={<h1 className="p-10">Services</h1>} />
        <Route path="/projects" element={<h1 className="p-10">Projects</h1>} />
        <Route path="/contact" element={<h1 className="p-10">Contact</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;