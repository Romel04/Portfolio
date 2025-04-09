"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceCard({ experience }) {
  const { title, company, period, description, technologies } = experience;
  
  return (
    <motion.div 
      className="relative pl-8 pb-8 border-l last:border-l-0"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center bg-secondary border-4 border-background">
        <Briefcase className="h-3 w-3" />
      </div>
      
      <div className="p-4 pl-6 rounded-lg bg-card border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-muted-foreground text-sm">{period}</span>
        </div>
        
        <h4 className="font-medium mb-3">{company}</h4>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                "bg-secondary/70 text-secondary-foreground"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}