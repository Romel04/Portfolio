import Image from "next/image";
import { FadeIn, RevealContainer } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Me | Eakhlasur Rahman",
  description: "Learn more about Eakhlasur Rahman, a Frontend Web Developer specializing in Next.js and React",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12 md:py-20">
        <RevealContainer className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary/20">
                <Image
                  src="/me.jpg" 
                  alt="Eakhlasur Rahman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Eakhlasur Rahman</span>
              </h1>
              <p className="text-xl font-medium text-muted-foreground mb-6">
                Frontend Web Developer
              </p>
              <p className="mb-6 text-muted-foreground">
                Web developer with expertise in Next.js, React, and Angular. I have proven experience in building comprehensive applications with a strong foundation in problem-solving through my competitive coding background.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </RevealContainer>

        <div className="max-w-4xl mx-auto">
          <RevealContainer className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="h-1 w-8 bg-primary rounded-full mr-3"></span>
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate web developer based in Dhaka, Bangladesh, specializing in frontend development with modern frameworks like Next.js and React. My journey in technology began during my Computer Science education at UITS, where I developed a strong foundation in coding and problem-solving.
              </p>
              <p>
                As a developer, I focus on creating responsive, user-friendly web applications that deliver exceptional user experiences. My competitive programming background has sharpened my algorithmic thinking and ability to write efficient code, with over 800 problems solved across platforms like Codeforces and LeetCode.
              </p>
              <p>
                I recently completed a Frontend Internship at Lamptechs where I enhanced my skills working on production applications, implementing authentication systems and efficient data fetching strategies. I'm passionate about continuous learning and staying updated with the latest web technologies and best practices.
              </p>
            </div>
          </RevealContainer>

          <RevealContainer className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="h-1 w-8 bg-primary rounded-full mr-3"></span>
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h3 className="text-lg font-semibold">B.Sc in Computer Science and Engineering</h3>
                <p className="text-muted-foreground">University of Information Technology & Sciences (UITS)</p>
                <p className="text-sm text-muted-foreground">2020 - 2023</p>
                <p className="text-sm font-medium mt-1">CGPA: 3.50/4.00</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h3 className="text-lg font-semibold">Higher Secondary Certificate (HSC) – Science</h3>
                <p className="text-muted-foreground">Government Laboratory High School and College</p>
                <p className="text-sm text-muted-foreground">2019</p>
                <p className="text-sm font-medium mt-1">GPA: 4.00/5.00</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h3 className="text-lg font-semibold">Secondary School Certificate (SSC) – Science</h3>
                <p className="text-muted-foreground">Motijheel Model High School and College</p>
                <p className="text-sm text-muted-foreground">2017</p>
                <p className="text-sm font-medium mt-1">GPA: 5.00/5.00</p>
              </div>
            </div>
          </RevealContainer>

          <RevealContainer>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="h-1 w-8 bg-primary rounded-full mr-3"></span>
              Extracurricular Activities
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-5 bg-card">
                <h3 className="font-medium">Senior Executive - Campus Wings of UITS Computer Club</h3>
                <p className="text-sm text-muted-foreground">2022 - 2023</p>
              </div>
              <div className="border rounded-lg p-5 bg-card">
                <h3 className="font-medium">Executive - Campus Wings of UITS Computer Club</h3>
                <p className="text-sm text-muted-foreground">2021 - 2022</p>
              </div>
            </div>
          </RevealContainer>
        </div>
      </div>
    </div>
  );
}