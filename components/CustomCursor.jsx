"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor({ isHovering = false }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
      backgroundColor: "transparent",
      border: "2px solid rgba(125, 211, 252, 0.5)", // Light blue border matching theme
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      opacity: 0.8,
      backgroundColor: "rgba(125, 211, 252, 0.2)", // Solid light blue when hovering links
      border: "2px solid transparent",
    },
  };

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Inner dot */}
        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
      </motion.div>
    </>
  );
}
