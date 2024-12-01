'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Github, Linkedin, Mail, Moon, Sun, } from 'lucide-react'
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from 'next/image'
import { Project, projects } from "./projectData"
import Masonry from "react-masonry-css"


const GlitchText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block group font-black">
      <span className="relative z-10 group-hover:animate-glitch-1">{children}</span>
      <span className="absolute top-0 left-0 -translate-x-[4px] translate-y-[4px] text-red-500 opacity-70 z-0 group-hover:animate-glitch-2">{children}</span>
      <span className="absolute top-0 left-0 translate-x-[4px] -translate-y-[4px] text-blue-500 opacity-70 z-0 group-hover:animate-glitch-3">{children}</span>
    </span>
  )
}

const imageLoader = () => {
  return `https://cdn.openart.ai/stable_diffusion/70fb184270f6f06b4399d700c2706d78fa814948_2000x2000.webp`
}


export default function Component() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Projects section component
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    }
  }

  return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
       <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 px-4 lg:px-6 h-14 flex items-center border-b"
      >
        <Link className="flex items-center justify-center" href="#">
          <GlitchText>Adnan Rahmanpoor</GlitchText>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </motion.header>

      

      <main className="flex-1">
         <section className="w-full flex h-screen items-center">
          <div className="absolute inset-0">
            <Image
              loader={imageLoader}
              src="https://cdn.openart.ai/stable_diffusion/70fb184270f6f06b4399d700c2706d78fa814948_2000x2000.webp"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/90 mix-blend-multiply" />
          </div>
           <div className="container px-4 md:px-6 z-10">
             <div className="flex flex-col items-center space-y-4 text-center">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <GlitchText>Adnan Rahmanpoor</GlitchText>
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Web Developer & Web Designer. I create beautiful, functional, and accessible websites.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-black mt-3 text-2xl">Next.js, Wordpress, Webflow</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4 z-20"
              >
                <Link href="https://github.com/adnanrahmanpoor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/adnanrahmanpoor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              <GlitchText>Skills</GlitchText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Frontend Development", skills: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap" },
                { title: "Backend Development", skills: "Node.js, Express, Python, Django, SQL, PHP, MongoDB" },
                { title: "Tools & Others", skills: "WordPress, Git, GitHub, VS Code, Figma, Responsive Design" }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="overflow-hidden group">
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{category.skills}</p>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              <GlitchText>Projects</GlitchText>
            </h2>
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-clip-padding"
            >   
              {projects.map((project: Project, index: number) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="overflow hidden-group mt-7 border-black border-solid rounded-lg">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={300}
                      height={200}
                      className="w-full object-cover rounded-lg"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Technologies used: {project.tech}</p>
                      <div className="mt-4 flex space-x-4">
                        {project.codeLink && (
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer" className="z-20">
                          <Button variant="outline" size="sm">
                            <Code className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                        )}
                        {project.demoLink && (
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="z-20">
                          <Button variant="outline" size="sm">
                            Live Demo
                          </Button>
                        </Link>
                        )}
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              ))}
            </Masonry>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              <GlitchText>Contact Me</GlitchText>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto space-y-4"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button className="w-full" type="submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
              {formStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
           <p className="text-xs text-muted-foreground">© 2024 Adnan Rahmanpoor. All rights reserved.</p>
         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
           <Link className="text-xs hover:underline underline-offset-4" href="#skills">
             Skills
           </Link>
           <Link className="text-xs hover:underline underline-offset-4" href="#projects">
             Projects
           </Link>
           <Link className="text-xs hover:underline underline-offset-4" href="#contact">
             Contact
           </Link>
         </nav>
      </footer>
    </div>
  )
}
