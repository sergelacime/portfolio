import { motion } from "framer-motion";
import SkillCard from "@/components/sections/SkillCard";
import { Code2, Database, Palette, Terminal } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5", "CSS3", "JavaScript"]
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Python", "Java"]
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Webpack", "Jest", "Cypress"]
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design & Other",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "SEO", "Agile", "Scrum", "Technical Writing"]
    }
  ];

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
        Skills & Expertise
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
