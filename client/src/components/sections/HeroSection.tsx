import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center gap-6 py-10"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-32 h-32 rounded-full bg-primary/10 overflow-hidden"
      >
        <div 
          className="w-full h-full bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/images/profil.jpg')" }}
        />
      </motion.div>

      {/* Le reste du code reste inchangé */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        Hi, I'm <span className="text-primary">Serge Z.A</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
      >
        A passionate full-stack developer crafting beautiful and functional web experiences
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <Link href="/projects">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline">
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}