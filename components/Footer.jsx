import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Eakhlasur Rahman</h3>
            <p className="text-muted-foreground mb-4">
              Web developer with expertise in Next.js, React, and Angular. Passionate about building user-friendly applications.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com/Romel04" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/eakhlasur-rahman" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:romel.rahman120@gmail.com">
                  <Mail size={18} />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="#">
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              {/* <Button size="icon" variant="ghost" asChild>
                <Link href="https://codeforces.com/" target="_blank" rel="noopener noreferrer">
                  <Code size={18} />
                  <span className="sr-only">Codeforces</span>
                </Link>
              </Button> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 uppercase">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  <span>Bashabo, Dhaka-1214</span>
                </li>
                <li>
                  <Link href="tel:+8801911463152" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +880 1911 463152
                  </Link>
                </li>
                <li>
                  <Link href="mailto:romel.rahman120@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    romel.rahman120@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eakhlasur Rahman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}