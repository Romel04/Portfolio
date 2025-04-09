"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SkillIcon({ skill }) {
  const { name, category } = skill;

  const getCategoryStyles = () => {
    switch (category) {
      case "framework":
        return "border-blue-400/20 bg-blue-400/10 dark:border-blue-500/20 dark:bg-blue-500/5";
      case "language":
        return "border-green-400/20 bg-green-400/10 dark:border-green-500/20 dark:bg-green-500/5";
      case "styling":
        return "border-purple-400/20 bg-purple-400/10 dark:border-purple-500/20 dark:bg-purple-500/5";
      case "database":
        return "border-amber-400/20 bg-amber-400/10 dark:border-amber-500/20 dark:bg-amber-500/5";
      default:
        return "border-gray-200 bg-gray-100/50 dark:border-gray-700 dark:bg-gray-800/50";
    }
  };

  return (
    <motion.div
      className={cn(
        "h-24 rounded-lg border flex items-center justify-center p-4 text-center hover:shadow-lg transition-all duration-300",
        getCategoryStyles()
      )}
      whileHover={{ 
        y: -10, 
        scale: 1.05, 
        rotateY: 10, 
        z: 10 
      }}
      whileTap={{ 
        scale: 0.95 
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}
