import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/sections/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

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
        Featured Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground mb-8"
      >
        Here are some of the projects I've worked on that showcase my skills and
        experience in web development.
      </motion.p>

      {isLoading ? (
        <ProjectsSkeleton />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl ?? undefined}
              githubUrl={project.githubUrl ?? undefined}
              index={index}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
