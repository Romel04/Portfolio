import { FadeIn, RevealContainer } from "@/components/animations";
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Experience | Eakhlasur Rahman",
  description: "Professional experience and career journey of Eakhlasur Rahman, Frontend Web Developer",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12 md:py-20">
        <RevealContainer className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-muted-foreground">
            My career journey, work experience, and professional growth as a web developer.
          </p>
        </RevealContainer>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
            {/* Frontend Intern */}
            <RevealContainer>
              <div className="absolute -left-[17px] p-1 bg-background border-2 border-primary/30 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              
              <div className="border rounded-xl p-6 bg-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">Frontend Intern</h2>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Lamptechs
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  October 2024 - March 2025 (4 Months)
                </div>
                
                <div className="space-y-3">
                  <FadeIn>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Developed user-friendly web applications using Next.js and React.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.1}>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Implemented authentication features with NextAuth and integrated Google Signup.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.2}>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Utilized TanStack Query for efficient data fetching and state management.</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </RevealContainer>

            {/* Industrial Attachment */}
            <RevealContainer>
              <div className="absolute -left-[17px] p-1 bg-background border-2 border-primary/30 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              
              <div className="border rounded-xl p-6 bg-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">Industrial Attachment</h2>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    SELISE Digital Platforms
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-1" />
                  10 Days
                </div>
                
                <div className="space-y-3">
                  <FadeIn>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Immersed in understanding the inner workings of the software industry.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.1}>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Focused on gaining foundational knowledge in MEAN stack.</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.2}>
                    <div className="flex gap-2">
                      <div className="min-w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Successfully developed an e-commerce project during the attachment.</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </RevealContainer>
            
            {/* Education */}
            <RevealContainer>
              <div className="absolute -left-[17px] p-1 bg-background border-2 border-primary/30 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              
              <div className="border rounded-xl p-6 bg-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">B.Sc in Computer Science and Engineering</h2>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    UITS
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  2020 - 2023
                </div>
                
                <p className="text-sm font-medium">CGPA: 3.50/4.00</p>
              </div>
            </RevealContainer>
            
            {/* Computer Club */}
            <RevealContainer>
              <div className="absolute -left-[17px] p-1 bg-background border-2 border-primary/30 rounded-full">
                <Award className="h-5 w-5 text-primary" />
              </div>
              
              <div className="border rounded-xl p-6 bg-card">
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <h2 className="text-xl font-bold">Campus Leadership</h2>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                    UITS Computer Club
                  </span>
                </div>
                
                <div className="space-y-4">
                  <FadeIn>
                    <div>
                      <h3 className="font-medium">Senior Executive - Campus Wings</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        2022 - 2023
                      </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.1}>
                    <div>
                      <h3 className="font-medium">Executive - Campus Wings</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        2021 - 2022
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </RevealContainer>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <FadeIn>
            <p className="text-muted-foreground mb-4">
              Interested in working together? Let's discuss how I can contribute to your team or project.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Me
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}