import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
