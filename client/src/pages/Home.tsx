import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
    </motion.div>
  );
}
