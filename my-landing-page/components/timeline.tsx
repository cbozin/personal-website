'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Code, Cpu, GraduationCap, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Experience</h2>
          <p className="mt-4">Professional journey and key career milestones</p>
        </div>
        
         <div className="relative mt-12 md:mt-20">
          {/* Centered Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-700 dark:via-zinc-400 dark:to-zinc-700" />
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={experience.id} 
                  className={`relative w-full ${isLeft ? 'pr-8 md:pr-[calc(50%+32px)]' : 'pl-8 md:pl-[calc(50%+32px)]'}`}
                >
                  {/* Icon positioned on the timeline with spacing */}
                  <div className="absolute left-0 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900 md:left-1/2">
                    {experience.icon}
                  </div>
                  
                  {/* Card with gap from timeline */}
                  <motion.div
                    className={`mt-12 md:mt-0 ${isLeft ? 'mr-8' : 'ml-8'}`} // Increased margin
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium">{experience.title}</h3>
                            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                              <span>{experience.company}</span>
                              <span>•</span>
                              <span>{experience.date}</span>
                            </div>
                            <p className="mt-4 text-base">{experience.description}</p>
                          </div>
                        </div>
                        
                        <ul className="mt-6 space-y-2">
                          {experience.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-base">
                              <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-zinc-400" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}