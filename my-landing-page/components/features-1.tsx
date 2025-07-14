'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code, Cpu, Globe, MessageSquare, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Product Microservices",
    date: "May 2025",
    url: "https://github.com/cbozin/spring-microservices",
    icon: Cpu,
    tech: ["Java", "Spring Boot", "Kafka", "Docker"],
    description: "Engineered microservices architecture with Product, Order, Inventory, and Notification Services using Spring Boot and Java 17.",
    highlights: [
      "70% improvement in deployment speed",
      "Integration tests with Testcontainers",
      "Dockerized deployment"
    ]
  },
  {
    id: 2,
    title: "Habit Tracker App",
    date: "May 2025",
    url: "https://frozen-plains-83661-38536826bbb5.herokuapp.com/",
    icon: Smartphone,
    tech: ["Ruby on Rails", "PostgreSQL", "Devise"],
    description: "Full-stack habit tracker with authentication, calendar check-ins, and streak tracking.",
    highlights: [
      "Built in under 2 weeks",
      "15+ Capybara tests",
      "Deployed to Heroku"
    ]
  },
  {
    id: 3,
    title: "Twitter Sentiment Analysis",
    date: "Feb - Apr 2024",
    url: "https://github.com/cbozin/sentiment-analysis-twitter-data",
    icon: MessageSquare,
    tech: ["Python", "GCP", "BigQuery", "Vertex AI"],
    description: "Analyzed Ukraine war-related sentiment trends from 47.5GB of Twitter data.",
    highlights: [
      "Automated data workflows",
      "Cloud-based processing",
      "Sentiment classification"
    ]
  },
  {
    id: 4,
    title: "AI Flashcards",
    date: "July 2024",
    url: "https://ai-flashcards-923xs34wv-cbozins-projects.vercel.app/",
    icon: Code,
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    description: "Web app that generates and quizzes users with AI-powered flashcards.",
    highlights: [
      "AI-powered generation",
      "Interactive study mode",
      "Modern Next.js architecture"
    ]
  },
  {
    id: 5,
    title: "Customer Support Bot",
    date: "Aug 2024",
    url: "https://customer-support-2x35wb3pb-cbozins-projects.vercel.app/",
    icon: MessageSquare,
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    description: "AI-powered chatbot for answering customer inquiries.",
    highlights: [
      "Natural language responses",
      "Customizable FAQ",
      "Responsive design"
    ]
  },
  {
    id: 6,
    title: "Location Data Analysis",
    date: "Sep - Dec 2022",
    url: "https://github.com/cbozin/quantified_self",
    icon: Globe,
    tech: ["Python", "Pandas", "Scikit-learn"],
    description: "Analysis of 1,000+ travel records with predictive modeling.",
    highlights: [
      "k-NN and Decision Tree models",
      "Behavioral pattern identification",
      "Matplotlib visualizations"
    ]
  }
];

export default function Projects() {
   return (
    <section id="projects" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Projects</h2>
          <p className="mt-4">Selected technical projects showcasing my full-stack and data engineering skills</p>
        </div>
        
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-12 grid max-w-sm gap-6 md:mt-20 md:max-w-none">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.url} 
              className="h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <Card className="group h-full flex flex-col shadow-zinc-950/5 hover:shadow-lg transition-shadow hover:border-zinc-300 dark:hover:border-zinc-600">
                  <CardHeader className="pb-3 flex-grow-0">
                    <AnimatedCardDecorator>
                      <project.icon className="size-6" aria-hidden />
                    </AnimatedCardDecorator>
                    <div className="mt-6">
                      <h3 className="font-medium text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.date}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="rounded-full bg-zinc-100 px-2.5 py-1 text-[0.7rem] dark:bg-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0 pb-4">
                    <p className="text-sm mb-3 line-clamp-2">{project.description}</p>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {project.highlights.map((highlight, i) => (
                        <li 
                          key={i} 
                          className="relative pl-3 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-muted-foreground line-clamp-2"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const AnimatedCardDecorator = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div 
      className="relative mx-auto size-32 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div
        aria-hidden
        className="bg-radial to-background absolute inset-0 from-transparent to-75%"
      />
      <motion.div 
        className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
        whileHover={{
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};