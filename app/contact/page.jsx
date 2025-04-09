import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Facebook } from "lucide-react";
import { FadeIn, RevealContainer } from "@/components/animations";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Me | Eakhlasur Rahman",
  description: "Get in touch with Eakhlasur Rahman, Frontend Web Developer specializing in Next.js and React",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12 md:py-20">
        <RevealContainer className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I&apos;m always open to new challenges and collaborations.
          </p>
        </RevealContainer>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="md:col-span-2">
            <FadeIn>
              <div className="border rounded-lg p-6 bg-card h-full">
                <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <div className="border rounded-lg p-6 bg-card h-full">
                <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <Link 
                        href="mailto:romel.rahman120@gmail.com"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        romel.rahman120@gmail.com
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <div className="flex flex-col">
                        <Link 
                        href="tel:+8801911463152"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +880 1911 463152
                      </Link>
                      <Link 
                        href="tel:+8801633302760"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +880 1633 302760
                      </Link>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Bashabo, Dhaka-1214, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium mb-3">Social Profiles</p>
                  <div className="flex space-x-3">
                    <Link 
                      href="https://github.com/Romel04" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/eakhlasur-rahman" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    {/* <Link 
                      href="https://codeforces.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Code className="h-4 w-4" />
                      <span className="sr-only">Codeforces</span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}