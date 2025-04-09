"use client";

import { FadeIn, RevealContainer } from "@/components/animations";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Data for featured projects - updated with multiple images per project
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

export function ProjectsSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <RevealContainer className="mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">Some of my recent work</p>
        </RevealContainer>
        
        <div className="relative w-full max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {featuredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full md:basis-1/2">
                  <div className="p-2">
                    <FadeIn direction="up" delay={index * 0.2}>
                      <ProjectCard project={project} />
                    </FadeIn>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;