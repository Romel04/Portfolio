"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }) {
  const { title, description, tech, images, github, liveLink } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Handle image rotation on hover
  useEffect(() => {
    if (isHovered && images && images.length > 1) {
      // Start rotating images every 1 second when hovered
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    } else {
      // Reset to first image and clear interval when not hovered
      setCurrentImageIndex(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images]);

  // Get current image URL
  const currentImage = images && images.length > 0 ? images[currentImageIndex] : null;

  return (
    <motion.div 
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all duration-200",
        "hover:shadow-lg hover:shadow-accent/5"
      )}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />
        
        {/* Project image with fallback gradient */}
        <div 
          className="h-full w-full bg-gradient-to-br from-secondary to-accent/20 transition-all duration-500"
          style={{
            backgroundImage: currentImage ? `url(${currentImage})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end gap-2">
          {github && (
            <Button size="icon" variant="secondary" asChild>
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub repository</span>
              </Link>
            </Button>
          )}
          
          {liveLink && (
            <Button size="icon" variant="secondary" asChild>
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Live project</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}