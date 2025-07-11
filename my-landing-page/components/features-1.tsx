import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Cpu, Database, Code, Smartphone, MessageSquare, Globe } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react';

const projects = [
  {
    id: 1,
    title: "Product Microservices",
    date: "May 2025",
    url: "#",
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
    url: "#",
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
    url: "#",
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
    date: "2024",
    url: "https://github.com/cbozin/ai-flashcards",
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
    date: "2024",
    url: "https://github.com/cbozin/customer-support-bot",
    icon: MessageSquare,
    tech: ["Next.js", "TypeScript", "AI"],
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
    url: "#",
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
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Projects</h2>
          <p className="mt-4">Selected technical projects showcasing my full-stack and data engineering skills</p>
        </div>
        
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 md:mt-16">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.url} 
              className="h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group h-full flex flex-col shadow-zinc-950/5 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 flex-grow-0">
                  <CardDecorator>
                    <project.icon className="size-6" aria-hidden />
                  </CardDecorator>
                  <div className="mt-6">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.date}</p>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm mb-2">{project.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="relative pl-3 before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
);