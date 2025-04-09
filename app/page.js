import { FadeIn, RevealContainer } from "@/components/animations";
import ExperienceCard from "@/components/ExperienceCard";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection"; // Import the new component
import SkillIcon from "@/components/SkillIcon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Data for skills
const skills = [
  { name: "Next.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Angular", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "JavaScript", category: "language" },
  { name: "C++", category: "language" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "MongoDB", category: "database" },
];

// Data for experience
const experiences = [
  {
    id: 1,
    title: "Frontend Intern",
    company: "Lamptechs",
    period: "October 2024 - March 2025",
    description: "Developed user-friendly web applications using Next.js and React. Implemented authentication features with NextAuth and integrated Google Signup. Utilized TanStack Query for efficient data fetching and state management.",
    technologies: ["Next.js", "React", "NextAuth", "TanStack Query"]
  },
  {
    id: 2,
    title: "Industrial Attachment",
    company: "SELISE Digital Platforms",
    period: "10 Days",
    description: "Gained foundational knowledge in the MEAN stack while developing an e-commerce project. Immersed in the software industry to understand project workflows and best practices.",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Projects Section - Using the new carousel component */}
      <ProjectSection />
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <RevealContainer className="mb-12">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground mt-2">Technologies I work with</p>
          </RevealContainer>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} direction="up" delay={index * 0.1}>
                <SkillIcon skill={skill} />
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link href="/skills">
                All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <RevealContainer className="mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <p className="text-muted-foreground mt-2">My professional journey</p>
          </RevealContainer>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <FadeIn key={experience.id} direction="up" delay={index * 0.2}>
                <ExperienceCard experience={experience} />
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="group">
              <Link href="/experience">
                Full Experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <RevealContainer>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                I'm always open to discussing new projects or opportunities.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </RevealContainer>
          </div>
        </div>
      </section>
    </div>
  );
}