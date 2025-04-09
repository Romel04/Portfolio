"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, RevealContainer } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";


const featuredProjects = [
  {
    id: 1,
    title: "MediApp",
    description: "A comprehensive medical platform connecting patients and doctors with secure authentication, appointment booking, and video consultations.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "JWT"],
    images: [
      "/projects/medi1.png",
      "/projects/medi2.png",
      "/projects/medi3.png",
      "/projects/medi4.png",
    ],
    github: "https://github.com/Romel04/MediApp",
    liveLink: "https://medi-app-ashen.vercel.app/",
  },
  {
    id: 2,
    title: "DU Alumni CSE Website",
    description: "Platform for CSE alumni to connect, donate, manage memberships, post and share stories, and access event information.",
    tech: ["React", "Next.js", "Tailwind CSS", "NextAuth.js"],
    images: [
      "/projects/cse1.png",
      "/projects/cse2.png",
      "/projects/csedashboard.png"
    ],
    liveLink: "https://cseduaa.org/",
  },
  {
    id: 3,
    title: "Regulated Advisor",
    description: "A platform connecting users with regulated financial advisors in the UK, allowing individuals to find financial and mortgage advisors easily and for free.",
    tech: ["React", "Next.js", "Material UI"],
    images: [
      "/projects/reg1.png",
      "/projects/reg2.png",
      "/projects/reg3.png"
    ],
    liveLink: "https://regulated-advisor-v3.vercel.app/"
  },
  {
    id: 4,
    title: "Sirajul Islam Alim Madrasah",
    description: "A platform to manage students, faculties and other manegments. Showcasing the details of courses, faculites and other important notices.",
    tech: ["React", "Next.js", "Tailwind CSS" , "Shad/cn"],
    images: [
      "/projects/sia1.png",
    ],
    liveLink: "https://sia-madrasah.vercel.app/"
  },
  {
    id: 5,
    title: "Deshi Trust",
    description: "Deshi Trust is an innovative e-commerce platform dedicated to promoting sustainable living through the sale of high-quality, handcrafted products made primarily from natural materials such as jute, wood, cane, coconut, and bamboo. Our mission is to support local artisans and craftsmen, providing them with a global marketplace to showcase their unique creations.",
    tech: ["React", "Next.js", "Material UI"],
    images: [
      "/projects/dt1.png",
      "/projects/dt2.png",
    ],
    liveLink: "https://ecommerce-fe-blue.vercel.app/"
  },
  {
    id: 6,
    title: "CSE DUAA Admin",
    description: "The CSE DUAA Admin Dashboard is a powerful and intuitive platform designed to streamline the management of events, news, scholarships, donations, users, and website content for the Dhaka University Alumni Association (CSE).",
    tech: ["React", "Next.js", "Tailwind CSS"],
    images: [
      "/projects/dua1.png",
    ],
    liveLink: "https://dua-cse-admin.vercel.app/"
  }
];

export default function ProjectsPageComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate project images
  useEffect(() => {
    const interval = setInterval(() => {
      const currentProject = featuredProjects[activeIndex];
      if (currentProject.images.length > 1) {
        setCurrentImageIndex(prev => (prev + 1) % currentProject.images.length);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  // Navigate to previous project
  const prevProject = () => {
    setActiveIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setCurrentImageIndex(0);
  };
  
  // Navigate to next project
  const nextProject = () => {
    setActiveIndex(prev => (prev + 1) % featuredProjects.length);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <div className="container py-12 md:py-20">
        <RevealContainer className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground">
            A collection of web applications I've developed, showcasing my skills in frontend and full-stack development.
          </p>
        </RevealContainer>

        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[500px]">
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Stacked Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {featuredProjects.map((project, index) => {
                // Calculate z-index and styles based on position relative to active index
                const distance = Math.abs(index - activeIndex);
                const isActive = index === activeIndex;
                const zIndex = featuredProjects.length - distance;
                
                // Different positions for cards in the stack
                let position = {};
                if (index < activeIndex) {
                  // Cards before active
                  position = {
                    x: "-80%", 
                    y: `${40 + (distance - 1) * 5}px`,
                    scale: 0.9 - (distance - 1) * 0.05,
                    opacity: 0.7 - (distance - 1) * 0.1,
                    rotateZ: -5
                  };
                } else if (index > activeIndex) {
                  // Cards after active
                  position = {
                    x: "80%", 
                    y: `${40 + (distance - 1) * 5}px`,
                    scale: 0.9 - (distance - 1) * 0.05,
                    opacity: 0.7 - (distance - 1) * 0.1,
                    rotateZ: 5
                  };
                } else {
                  // Active card
                  position = {
                    x: 0, 
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotateZ: 0
                  };
                }
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={position}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute border rounded-xl overflow-hidden bg-card shadow-lg w-full md:w-4/5 max-w-4xl"
                    style={{ zIndex }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-video md:aspect-square overflow-hidden">
                        <Image
                          src={project.images[isActive ? currentImageIndex : 0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-500"
                          sizes="1000px"
                        />
                        
                        {/* Image indicators */}
                        {isActive && project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {project.images.map((_, imgIndex) => (
                              <div 
                                key={imgIndex} 
                                className={`w-2 h-2 rounded-full ${
                                  imgIndex === currentImageIndex 
                                    ? "bg-primary" 
                                    : "bg-primary/30"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex flex-col">
                        {isActive && (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`content-${project.id}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5,
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                              }}
                              className="flex flex-col h-full"
                            >
                              <motion.h2 
                                className="text-2xl font-bold mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                {project.title}
                              </motion.h2>
                              
                              <motion.p 
                                className="text-muted-foreground mb-4 flex-grow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                              >
                                {project.description}
                              </motion.p>
                              
                              <motion.div 
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                <h3 className="text-sm font-medium mb-2">Technologies Used:</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tech, i) => (
                                    <motion.span 
                                      key={i} 
                                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                                    >
                                      {tech}
                                    </motion.span>
                                  ))}
                                </div>
                              </motion.div>
                              
                              <motion.div 
                                className="flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                {project.github && (
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="mr-2 h-4 w-4" />
                                      GitHub
                                    </Link>
                                  </Button>
                                )}
                                {project.liveLink && (
                                  <Button size="sm" asChild>
                                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Live Demo
                                    </Link>
                                  </Button>
                                )}
                              </motion.div>
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Dots Navigation */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 py-4">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setCurrentImageIndex(0);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-primary scale-125" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}