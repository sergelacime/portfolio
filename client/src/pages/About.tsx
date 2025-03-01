import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Timeline from "@/components/sections/Timeline";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience in creating web applications. I specialize in modern JavaScript frameworks and have a keen eye for design and user experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="aspect-square rounded-full overflow-hidden bg-primary/10 flex items-center justify-center"
        >
          <span className="text-6xl">👨‍💻</span>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-semibold mb-6"
      >
        Professional Journey
      </motion.h2>

      <Timeline />
    </motion.div>
  );
}
