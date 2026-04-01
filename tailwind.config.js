import { body } from "framer-motion/client";
import { Heading } from "lucide-react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Heading: ["Poppins", "sans-serif"],
        body: ["Inter","sans-serif"]
      },
    },
  },
  plugins: [],
};