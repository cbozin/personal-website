import { Card, CardContent } from '@/components/ui/card'
import { Code, Cpu, GraduationCap, Layers } from 'lucide-react'
export default function ExperienceTimeline() {
  const experiences = [
  {
    id: 1,
    title: "AI Trainer",
    company: "DataAnnotation Tech",
    date: "June 2024 - Present",
    icon: <Cpu className="h-5 w-5" />, // Using CPU icon for AI work
    description: "Evaluating and improving Large Language Model responses",
    highlights: [
      "Assess LLM outputs for accuracy and instruction following",
      "Analyze and optimize AI-generated code"
    ]
  },
  {
    id: 2,
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    date: "July 2024 - Sep 2024",
    icon: <Code className="h-5 w-5" />,
    description: "Built full-stack projects using modern web technologies",
    highlights: [
      "Developed Customer Support Bot, AI Flashcards, and Pantry Tracker",
      "Tech: React, Next.js, Firebase, OpenAI API",
      "Followed Agile with CI/CD pipelines"
    ]
  },
  {
    id: 3,
    title: "Full-stack Development Intern",
    company: "BNBuilders",
    date: "May 2023 - Aug 2023",
    icon: <Layers className="h-5 w-5" />, // Represents full-stack work
    description: "Developed internal employee training web application",
    highlights: [
      "Reduced employee training time by 50%",
      "Tech stack: C#, ASP.NET, JavaScript, SQL",
      "Conducted daily standups with team members"
    ]
  },
  {
    id: 4,
    title: "Computer Science, B.S.",
    company: "Gonzaga University",
    date: "Sep 2020 - May 2024",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Magna Cum Laude, WSOS Scholar, WWIN Star Scholar",
    highlights: [
      "Key Courses: Database Management (SQL), Data Structures (C++), Big Data (GCP)",
      "Parallel/Cloud Computing, Software Engineering",
      "UI/UX Design, Linux & DevOps"
    ]
  }
]


  return (
    <section id="experience" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        {/* Added header matching projects section */}
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Experience</h2>
          <p className="mt-4">Professional journey and key career milestones</p>
        </div>
        
        {/* Timeline content */}
        <div className="relative max-w-2xl mx-auto mt-8 md:mt-16">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-700 dark:via-zinc-400 dark:to-zinc-700" />
          
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative pl-16">
                {/* Icon indicator */}
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-900">
                  {experience.icon}
                </div>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium">{experience.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{experience.company}</span>
                          <span>•</span>
                          <span>{experience.date}</span>
                        </div>
                        <p className="mt-2 text-sm">{experience.description}</p>
                      </div>
                      {/* {index == 0 && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          <Star className="h-3 w-3" /> Current
                        </span>
                      )} */}
                    </div>
                    
                    <ul className="mt-4 space-y-1">
                      {experience.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-2 mt-0.5 flex h-1.5 w-1.5 rounded-full bg-zinc-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}