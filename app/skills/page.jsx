import { FadeIn, RevealContainer } from "@/components/animations";
import { Code, Database, Layout, Server, GitBranch, Brain } from "lucide-react";
import SkillsCarousel from "@/components/SkillsCarousel";

export const metadata = {
  title: "Skills | Eakhlasur Rahman",
  description: "Explore the technical skills and competencies of Eakhlasur Rahman, Frontend Web Developer",
};

const skills = [
  { name: "React", category: "framework", icon: "/skills/react.png" },
  { name: "Next.js", category: "framework", icon: "/skills/nextjs.png" },
  { name: "Angular", category: "framework", icon: "/skills/angular.webp" },
  { name: "JavaScript", category: "language", icon: "/skills/js.png" },
  { name: "C++", category: "language", icon: "/skills/c.png" },
  { name: "HTML5", category: "language", icon: "/skills/html5.png" },
  { name: "CSS3", category: "styling", icon: "/skills/css3.png" },
  { name: "Tailwind CSS", category: "styling", icon: "/skills/tailwindcss.png" },
  { name: "Bootstrap", category: "styling", icon: "/skills/bootstrap.png" },
  { name: "Node.js", category: "framework", icon: "/skills/nodejs.png" },
  { name: "Express.js", category: "framework", icon: "/skills/express.png" },
  { name: "MongoDB", category: "database", icon: "/skills/mongodb.png" },
  { name: "MySQL", category: "database", icon: "/skills/mysql.png" },
  { name: "Git", category: "tools", icon: "/skills/git.png" },
  { name: "GitHub", category: "tools", icon: "/skills/github.png" },
];

const skillCategories = [
  {
    title: "Web Development & Frameworks",
    icon: <Layout className="h-6 w-6" />,
    skills: ["Next.js", "React", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Server-side",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "C++"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Version Control & Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub"],
  },
  {
    title: "Core Computer Science",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems"],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12 md:py-20">
        <RevealContainer className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground">
            A comprehensive look at my technical skills and competencies as a web developer.
          </p>
        </RevealContainer>

        {/* Skills Carousel */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Technologies I Work With</h2>
          <SkillsCarousel skills={skills} />
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border rounded-xl p-6 bg-card h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <RevealContainer className="max-w-5xl mx-auto mt-16">
          <div className="border rounded-xl p-8 bg-card hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                <Code className="h-5 w-5" />
              </span>
              Competitive Programming
            </h2>
            <p className="text-muted-foreground mb-8">
              I have solved over <span className="font-semibold text-foreground">800 problems</span> and participated in more than <span className="font-semibold text-foreground">30 contests</span> across platforms like Codeforces, LeetCode, and CodeChef, which has significantly strengthened my problem-solving abilities and algorithmic thinking.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5 bg-background hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-medium mb-2 text-lg">UITS Victory Day Contest</h3>
                <p className="text-muted-foreground">Ranked <span className="font-semibold text-foreground">9th</span> in the competition</p>
              </div>
              <div className="border rounded-lg p-5 bg-background hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-medium mb-2 text-lg">Inter-University Collaboration Contest</h3>
                <p className="text-muted-foreground">Ranked <span className="font-semibold text-foreground">7th</span> (team) in the competition</p>
              </div><div className="border rounded-lg p-5 bg-background hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-medium mb-2 text-lg">Online Judges</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href="https://codeforces.com/profile/Romel."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <img src="/codeforces.webp" alt="Codeforces Logo" className="h-4 w-4 mr-2" />
                    Codeforces Profile
                    <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/romel2k/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <img src="/leetcode.webp" alt="LeetCode Logo" className="h-4 w-4 mr-2" />
                    LeetCode Profile
                    <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </RevealContainer>
      </div>
    </div>
  );
}