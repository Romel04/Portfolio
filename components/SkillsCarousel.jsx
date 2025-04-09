"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Speed multipliers for different rows
const SPEED_MULTIPLIERS = [1, 0.8, 1.2, 0.9, 1.1];

export default function SkillsCarousel({ skills }) {
  const carouselRef = useRef(null);
  
  // Split skills into 3 different rows
  const rows = [
    skills.slice(0, 5),
    skills.slice(5, 9),
    skills.slice(9, 15)
  ];

  // Create duplicate rows for infinite effect
  const carouselRows = rows.map((row, index) => {
    // Reverse direction for alternating rows
    const direction = index % 2 === 0 ? 1 : -1;
    const speedMultiplier = SPEED_MULTIPLIERS[index % SPEED_MULTIPLIERS.length];
    
    return { items: row, direction, speedMultiplier };
  });

  const getCategoryStyles = (category) => {
    switch (category) {
      case "framework":
        return "border-blue-400/20 bg-blue-400/10 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/5 dark:text-blue-400";
      case "language":
        return "border-green-400/20 bg-green-400/10 text-green-600 dark:border-green-500/20 dark:bg-green-500/5 dark:text-green-400";
      case "styling":
        return "border-purple-400/20 bg-purple-400/10 text-purple-600 dark:border-purple-500/20 dark:bg-purple-500/5 dark:text-purple-400";
      case "database":
        return "border-amber-400/20 bg-amber-400/10 text-amber-600 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-400";
      case "tools":
        return "border-red-400/20 bg-red-400/10 text-red-600 dark:border-red-500/20 dark:bg-red-500/5 dark:text-red-400";
      default:
        return "border-gray-200 bg-gray-100/50 text-gray-700 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300";
    }
  };

  return (
    <div className="w-full overflow-hidden py-4" ref={carouselRef}>
      {carouselRows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-6 relative">
          {/* Original row */}
          <motion.div
            className="flex gap-6 absolute"
            initial={{ x: row.direction > 0 ? 0 : "-100%" }}
            animate={{ 
              x: row.direction > 0 ? "-100%" : 0 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 25 / row.speedMultiplier,
              ease: "linear"
            }}
          >
            {row.items.map((skill, index) => (
              <SkillCard 
                key={`${rowIndex}-${index}`}
                skill={skill}
                categoryStyles={getCategoryStyles(skill.category)}
              />
            ))}
            {row.items.map((skill, index) => (
              <SkillCard 
                key={`${rowIndex}-dup1-${index}`}
                skill={skill}
                categoryStyles={getCategoryStyles(skill.category)}
              />
            ))}
          </motion.div>
          
          {/* Duplicate row for seamless looping */}
          <motion.div
            className="flex gap-6 absolute pl-4"
            initial={{ x: row.direction > 0 ? "100%" : 0 }}
            animate={{ 
              x: row.direction > 0 ? 0 : "100%" 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 25 / row.speedMultiplier,
              ease: "linear"
            }}
          >
            {row.items.map((skill, index) => (
              <SkillCard 
                key={`${rowIndex}-dup2-${index}`}
                skill={skill}
                categoryStyles={getCategoryStyles(skill.category)}
              />
            ))}
            {row.items.map((skill, index) => (
              <SkillCard 
                key={`${rowIndex}-dup3-${index}`}
                skill={skill}
                categoryStyles={getCategoryStyles(skill.category)}
              />
            ))}
          </motion.div>
          
          {/* Static placeholder for height */}
          <div className="flex gap-6 opacity-0 pointer-events-none">
            {row.items.map((skill, index) => (
              <div key={`placeholder-${rowIndex}-${index}`} className="h-32 w-32 flex-shrink-0"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillCard({ skill, categoryStyles }) {
  return (
    <motion.div
      className={cn(
        "h-32 w-32 rounded-xl border flex flex-col items-center justify-center p-4 text-center transition-all duration-300",
        categoryStyles
      )}
      whileHover={{ 
        y: -5, 
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-12 w-12 mb-2">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="font-medium text-sm">{skill.name}</span>
    </motion.div>
  );
}