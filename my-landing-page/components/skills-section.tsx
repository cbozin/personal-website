'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'

export default function SkillsSection() {
  const skills = {
    "Programming Languages": ['Python', 'Ruby', 'JavaScript','Java', 'C++'],
    "Web Development": [
      'Next.js','Ruby on Rails','Flask', 'ASP.NET MVC', 
       'HTML/CSS', 'Bootstrap'
    ],
    "Database & Cloud": [
      'SQL', 'Google Cloud Platform', 'PostgreSQL', 
      'Microsoft SQL Server', 'MongoDB'
    ],
    "Tools & Practices": [
      'Linux', 'Git/Github', 'Docker', 'Vercel & Heroku', 
      'Agile & CI/CD', 'Test Driven Development'
    ],
    "Data Science/ML": [
      'Pandas', 'NumPy', 'MatPlotLib', 
      'Scikit-learn', 'Jupyter', 'OpenAI API',
      'VertexAI'
    ]
  }

  return (
    <section id="skills" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Skills</h2>
          <p className="mt-4">Technologies and tools I work with</p>
        </div>

        {/* Logo Cloud */}
        {/* <div className="mt-12">
          <LogoCloud />
        </div> */}

        
        {/* Skills Cards - 3 in first row, 2 in second row */}
        <div className="mt-16">
          {/* First Row - 3 Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {Object.entries(skills)
              .slice(0, 3) // First 3 cards
              .map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-16px)] min-w-[250px] max-w-[300px]"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium">{category}</h3>
                      <ul className="mt-4 space-y-2">
                        {items.map((skill) => (
                          <li key={skill} className="flex items-start">
                            <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-zinc-400" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(skills)
              .slice(3) // Last 2 cards
              .map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] min-w-[250px] max-w-[300px]"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium">{category}</h3>
                      <ul className="mt-4 space-y-2">
                        {items.map((skill) => (
                          <li key={skill} className="flex items-start">
                            <span className="mr-3 mt-1.5 flex h-2 w-2 rounded-full bg-zinc-400" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}