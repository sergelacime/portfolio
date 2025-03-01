import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

function TimelineItem({ title, company, date, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-border" />
      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-primary" />
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Timeline() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      date: "2020 - Present",
      description: "Led frontend development team and implemented new features using React and TypeScript."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      date: "2018 - 2020",
      description: "Developed and maintained various web applications using modern technologies."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((exp, index) => (
        <TimelineItem key={index} {...exp} index={index} />
      ))}
    </div>
  );
}
