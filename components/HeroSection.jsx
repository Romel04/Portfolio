"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Download, Github } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FadeIn, TextReveal } from "./animations";

export default function HeroSection() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
      {/* Animated grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid-pattern z-0 opacity-40 dark:opacity-20"
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-accent font-medium mb-3">Web Developer</h2>
          </FadeIn>
          
          <div className="mb-6">
            <TextReveal className="inline-block" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-gradient">Eakhlasur Rahman</span>
              </h1>
            </TextReveal>
          </div>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              I build modern web applications with Next.js, React, and Angular. Passionate about creating intuitive user experiences and solving complex problems.
            </p>
          </FadeIn>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <FadeIn direction="up" delay={0.5}>
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </FadeIn>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <FadeIn direction="up" delay={0.7}>
              <Link 
                href="https://github.com/Romel04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.8}>
              <Link 
                href="https://www.linkedin.com/in/eakhlasur-rahman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.9}>
              <Link 
                href="/resume.pdf"  // Ensure this path is correct
                download // Add this attribute to trigger download
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Resume</span>
              </Link>
            </FadeIn>
          </div>
        </div>
        
        {/* Animated floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-16 h-16 rounded-full bg-accent/20 blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-primary/10 blur-xl"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
