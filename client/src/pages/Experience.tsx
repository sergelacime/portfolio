import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Building2 } from "lucide-react";
import type { Experience } from "@shared/schema";

function ExperienceSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardContent className="pt-6 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-20 w-full" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-6 w-20" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Experience() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
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
        Work Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground mb-8"
      >
        My professional journey and the companies I've had the pleasure to work with.
      </motion.p>

      {isLoading ? (
        <ExperienceSkeleton />
      ) : (
        <div className="space-y-6">
          {experiences?.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{exp.role}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
