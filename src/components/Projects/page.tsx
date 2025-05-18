"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCode, Github, Globe, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "../ui/input"

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("")

  // Combined projects data
  const allProjects = [
    // Professional Work
    {
      category: "work",
      image: "/projectImage/ArkwoodLogo.png",
      title: "Arkwood Company Website",
      badge: ["ETHIO ARKWOOD ENTERTAINMENT"],
      type: [
        {
          site: "https://ethioarkwood.com/",
          apk: "",
          source: "",
        },
      ],
      tags: ["React", "Web Development", "Company Website"],
      description:
        "At Ethio-Arkwood Entertainment, a leading production company in Ethiopia dedicated to advancing African storytelling, I developed their official company website using React. The site showcases their work in documentary and feature films, advertising, and event organization. My goal was to create a fast, responsive, and visually engaging platform that reflects their mission of blending innovative technology with traditional storytelling—supporting their efforts to elevate African cinema on the global stage.",
    },
    {
      category: "work",
      image: "/projectImage/aafma.png",
      title: "Arkwood African Film Market & Awards",
      badge: ["ETHIO ARKWOOD ENTERTAINMENT"],
      type: [
        {
          site: "https://aafma.ethioarkwood.com/about",
          apk: "",
          source: "",
        },
      ],
      tags: ["React", "Web Development", "Film Industry"],
      description:
        "I built the official web application for the Arkwood Africa Film Market and Awards (AAFMA)—a pioneering initiative organized by Ethio-Arkwood Entertainment and Nolawi Film Production to advance Ethiopia's and Africa's audiovisual industry. The platform connects filmmakers, investors, and distributors through features that support workshops, conferences, B2B meetings, and policy updates. I created a responsive and user-friendly interface to enhance visibility, drive engagement, and support AAFMA's mission of positioning Ethiopia as a central hub for African cinema and cultural tourism.",
    },
    {
      category: "work",
      image: "/projectImage/arkwood.png",
      title: "Arkwood Mobile App",
      badge: ["ETHIO ARKWOOD ENTERTAINMENT"],
      type: [
        {
          site: "",
          apk: "",
          source: "",
        },
      ],
      tags: ["React Native", "Mobile App", "Streaming"],
      description:
        "I developed a cross-platform mobile streaming app for Amharic movies, supporting both iOS and Android. The app offers multiple payment options in ETB and USD, with support for both one-time payments and subscription packages. It includes multilingual support, push notifications, an advanced search and filtering system, and a watch history feature for user convenience. Additionally, the app ensures secure streaming with protection against screen recording, providing users with a reliable and seamless experience for enjoying on-demand Amharic films.",
    },
    {
      category: "work",
      image: "/projectImage/dpo.png",
      title: "Development For Peace Organization (DPO) Website",
      badge: ["Cross Light Africa"],
      type: [
        {
          site: "https://devforpeace.org/",
          apk: "",
          source: "",
        },
      ],
      tags: ["Web Development", "NGO", "Custom Platform"],
      description:
        "Developed a customized web-based platform for Development for Peace Organization, a national and international NGO. Delivered end-to-end solutions that streamline operational workflows and enable seamless data integration across country programs. Tailored dashboards for program management, implemented secure user authentication, and built modules for reporting, partner engagement, and internal communication. Provided a scalable and secure digital infrastructure aligned with the organization's humanitarian and development missions.",
    },
    {
      category: "work",
      image: "/projectImage/ak.png",
      title: "LMS for AK tube",
      badge: ["Adinet ICT Solutions"],
      type: [
        {
          site: "",
          apk: "",
          source: "",
        },
      ],
      tags: ["Web Development", "LMS", "Education"],
      description:
        "Developing Learning management system for AK Tube by transforming their learning system from YouTube to a web-based portal. This system includes key functionalities such as course management admin panel for teachers, interactive course modules, evaluation and realtime progress tracking for learners. Additional features include such as user authentication, data storage and retrieval, responsive user interface, payment integration and discussion forums",
    },
    {
      category: "work",
      image: "/projectImage/dire.png",
      title: "HRMS for Dire-MFI",
      badge: ["Adinet ICT Solutions"],
      type: [
        {
          site: "https://hr.diremfi.com",
          apk: "",
          source: "",
        },
      ],
      tags: ["Web Development", "HRMS", "Finance"],
      description:
        "Human Resources Management Systems (HRMS) for Dire Microfinance Institution. This involved tailoring the system to meet the unique needs of the organization, including configuring workflows, creating custom modules, and integrating various functionalities to streamline HR processes such as employee Recruitment, Onboarding, Attendance, Leave and Offboarding. I worked closely with stakeholders to understand their requirements, ensuring that the system was not only technically sound but also user-friendly and efficient, ultimately enhancing the overall HR operations within the organization.",
    },

    // Personal Projects
    {
      category: "personal",
      image: "/projectImage/award.png",
      title: "Award Winning Website",
      badge: ["React Vite", "GSAP", "tailwindcss"],
      type: [
        {
          site: "https://award-winning-website-delta.vercel.app/",
          apk: "",
          source: "https://github.com/ET-SPARK/Award-winning-website",
        },
      ],
      tags: ["React", "Animation", "GSAP"],
      description:
        "The website leverages a cutting-edge technology stack comprising React Vite, Tailwind CSS and GSAP. Its standout animations include smooth transitions, interactive elements responding to user actions, and advanced effects like parallax scrolling and 3D sequences, creating a captivating experience. These features, combined with its engaging interactivity and memorable design, ensure an exceptional user experience and have earned it recognition from Awwwards as a Site of the Month.",
    },
    {
      category: "personal",
      image: "/projectImage/disney.png",
      title: "Walt Disney Clone",
      badge: ["React", "Redux", "Firebase"],
      type: [
        {
          site: "https://desiny-plus.web.app/",
          apk: "",
          source: "https://github.com/ET-SPARK/Walt-Disny-Clone",
        },
      ],
      tags: ["React", "Redux", "Firebase"],
      description:
        "The Walt Disney website clone, built with React, Redux, Styled-components, and Firebase, delivers a dynamic and interactive user experience. React ensures smooth navigation, Redux manages state efficiently, and Styled-components provide a modular design, while Firebase offers secure backend services. This project showcases advanced web development skills in creating a robust Disney site replication.",
    },
    {
      category: "personal",
      image: "/projectImage/lumax.png",
      title: "LUMAX Property",
      badge: ["React", "Node", "Express", "MongoDB"],
      type: [
        {
          site: "https://lumax.vercel.app/",
          apk: "",
          source: "https://github.com/ET-SPARK/Lumax",
        },
      ],
      tags: ["React", "Node.js", "MongoDB", "Full Stack"],
      description:
        "The LUMAX Property project, built with React, Node, Express, and MongoDB, provides a robust platform for property management and listings. React ensures a dynamic and responsive user interface, while Node and Express handle efficient server-side operations. MongoDB offers a scalable and flexible database solution for storing property data.",
    },
    {
      category: "personal",
      image: "/projectImage/movie.png",
      title: "Hulu-Movie",
      badge: ["React Native", "Tailwind css", "themoviedb API"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/1U1IXKDkobp9Wz7kg6EEdtT9eLywzi_0o/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Movie",
        },
      ],
      tags: ["React Native", "Mobile App", "Movies"],
      description:
        "The Hulu-Movie project, built with React Native, Tailwind CSS, and the themoviedb API, offers a seamless and visually appealing mobile app for browsing movies. React Native ensures cross-platform compatibility, Tailwind CSS provides a modern and responsive design, and the themoviedb API supplies comprehensive movie data.",
    },
    {
      category: "personal",
      image: "/projectImage/fogera.png",
      title: "Engocha Food delivery",
      badge: ["React Native", "Firebase", "Chapa", "Map"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/1FEhXW-Ewi0880RKMnNK4dCM7eBCLQwnw/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Mini-Fogera-food-delivery-app",
        },
      ],
      tags: ["React Native", "Firebase", "Food Delivery"],
      description:
        "The Engocha Food delivery project, built with React Native, Firebase, Chapa, and map integration, delivers a seamless and user-friendly mobile app for ordering food. React Native ensures cross-platform functionality, Firebase provides a robust backend, Chapa handles secure payments, and map integration facilitates efficient delivery tracking.",
    },
    {
      category: "personal",
      image: "/projectImage/ecommerce.png",
      title: "Ecommerce",
      badge: ["Next", "Sanity", "React Context", "Stripe"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/ecommerce",
        },
      ],
      tags: ["Next.js", "Sanity", "E-commerce"],
      description:
        "The Ecommerce project, built with Next.js, Sanity, React Context, and Stripe, creates a powerful and dynamic online shopping platform. Next.js ensures fast performance and SEO optimization, Sanity manages content efficiently, React Context handles state management, and Stripe provides secure payment processing.",
    },
    {
      category: "personal",
      image: "/projectImage/amazone.png",
      title: "Amazone Clone",
      badge: ["React", "Redux", "Firebase", "Stripe"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Amazone-clone",
        },
      ],
      tags: ["React", "Redux", "E-commerce"],
      description:
        "The Amazon clone project, built with React, Redux, Firebase, and Stripe, replicates the core functionalities of the popular e-commerce platform. React powers the user interface for a smooth shopping experience, while Redux manages application state effectively. Firebase serves as the backend for user authentication and data storage, and Stripe enables secure payment processing, creating a comprehensive online shopping solution.",
    },
    {
      category: "personal",
      image: "/projectImage/booking.png",
      title: "Hulu-Booking",
      badge: ["React Native", "Redux", "MongoDB"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/1qVpGPaKbojtuqmB1yAlgJVA49pJZi_0X/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Booking-App",
        },
      ],
      tags: ["React Native", "Mobile App", "Booking"],
      description:
        "The Hulu-Booking project, built with React Native, Redux, and MongoDB, provides a user-friendly mobile app for hotel bookings. React Native ensures a smooth and responsive experience across devices, while Redux efficiently manages the application state. MongoDB serves as the backend database, allowing for scalable storage of hotel information and user data, creating an effective platform for travelers.",
    },
    {
      category: "personal",
      image: "/projectImage/jobs.png",
      title: "Hulu-Jobs",
      badge: ["React Native", "Rapid API"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/18Om-Y22_e3nhpRbos4kQC1we23kGkHKC/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Job",
        },
      ],
      tags: ["React Native", "Mobile App", "Jobs"],
      description:
        "The Hulu-Jobs project, built with React Native and RapidAPI, offers a mobile platform for job searching and applications. React Native provides a smooth, responsive user experience, while RapidAPI connects to various job listing APIs for real-time data access. This combination creates an efficient and user-friendly app for job seekers to explore opportunities and manage applications seamlessly.",
    },
    {
      category: "personal",
      image: "/projectImage/threads.png",
      title: "Threads-Clone",
      badge: ["React Native", "Node", "Express", "MongoDB"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Threads-clone-app",
        },
      ],
      tags: ["React Native", "Node.js", "Social Media"],
      description:
        "The Threads-Clone project, built with React Native, Node, Express, and MongoDB, replicates the core functionalities of a social media platform for sharing updates and engaging with users. React Native ensures a smooth and responsive mobile experience, while Node and Express handle backend server operations efficiently. MongoDB serves as the database, providing scalable storage for user data and posts, creating a robust environment for social interactions.",
    },
    {
      category: "personal",
      image: "/projectImage/spotify.webp",
      title: "Spotify-Clone",
      badge: ["React Native", "Spotify API"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/spotify-clone",
        },
      ],
      tags: ["React Native", "Mobile App", "Music"],
      description:
        "The Spotify-Clone project, built with React Native and the Spotify API, offers a mobile experience for streaming music and exploring playlists. React Native ensures a responsive and engaging user interface, while the Spotify API provides access to a vast library of songs, albums, and artist information. This project allows users to discover and enjoy music in a familiar layout, showcasing modern app development skills.",
    },
    {
      category: "personal",
      image: "/projectImage/uber.webp",
      title: "Uber-Clone",
      badge: ["Next", "Mapbox", "Tailwind CSS"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/uber-clone",
        },
      ],
      tags: ["Next.js", "Mapbox", "Transportation"],
      description:
        "The Uber-Clone project, built with Next.js, Mapbox, and Tailwind CSS, replicates the core functionalities of a ride-hailing service. Next.js ensures fast performance and SEO optimization, while Mapbox provides advanced mapping and geolocation features for tracking rides. Tailwind CSS offers a sleek, responsive design, creating an intuitive and user-friendly interface for both riders and drivers.",
    },
    {
      category: "personal",
      image: "/projectImage/tesla.png",
      title: "Tesla-Clone",
      badge: ["React Native"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Tesla-clone",
        },
      ],
      tags: ["React Native", "Mobile App", "Automotive"],
      description:
        "The Tesla-Clone project, built with React Native, aims to replicate the sleek and innovative experience of the official Tesla app. With a focus on a responsive user interface, the app allows users to explore vehicle features, manage their electric vehicles, and access charging station information. This project showcases the ability to create a modern, user-friendly mobile application that reflects the cutting-edge technology of Tesla.",
    },
  ]

  // Get unique tags for filtering
  const allTags = [...new Set(allProjects.flatMap((project) => project.tags))]
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter projects based on search and tags
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  // Filter projects by category
  const workProjects = filteredProjects.filter((project) => project.category === "work")
  const personalProjects = filteredProjects.filter((project) => project.category === "personal")

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Project card component
  const ProjectCard = ({ project }: { project: (typeof allProjects)[0] }) => {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-yellow-500/20 hover:border-yellow-500">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="h-[220px] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={220}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute top-2 right-2 z-20 flex gap-1">
              {project.type[0].site && (
                <Link href={project.type[0].site} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="hover:bg-white w-8 h-8 rounded-full">
                    <Globe className="h-4 w-4 text-yellow-600" />
                    <span className="sr-only">Visit Site</span>
                  </Button>
                </Link>
              )}
              {project.type[0].source && (
                <Link href={project.type[0].source} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className=" hover:bg-white w-8 h-8 rounded-full">
                    <Github className="h-4 w-4 text-yellow-600" />
                    <span className="sr-only">View Source</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1 text-xl">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.badge.map((badge, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-yellow-500/10 text-yellow-700 border-yellow-500/30 text-xs"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground lg:h-[250px] sm:h-auto">{project.description}</p>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-xs  cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </CardFooter>

          <div className="p-4 py-4 border-t">
            <div className="flex gap-2 flex-wrap">
              {project.type[0].site && (
                <Link href={project.type[0].site} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </Link>
              )}
              {project.type[0].apk && (
                <Link href={project.type[0].apk} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white"
                  >
                    <FileCode className="h-4 w-4 mr-2" />
                    Download APK
                  </Button>
                </Link>
              )}
              {project.type[0].source && (
                <Link href={project.type[0].source} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">My Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing my professional work and personal projects built with modern technologies
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8  backdrop-blur-sm p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-2 flex-wrap">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${selectedTags.includes(tag) ? "bg-yellow-500 hover:bg-yellow-600" : "hover:bg-yellow-100"
                    }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-red-100 border-red-300 text-red-500"
                  onClick={() => setSelectedTags([])}
                >
                  Clear filters
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Projects ({filteredProjects.length})</TabsTrigger>
          <TabsTrigger value="work">Professional Work ({workProjects.length})</TabsTrigger>
          <TabsTrigger value="personal">Personal Projects ({personalProjects.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects match your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTags([])
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="work" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {workProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No professional work projects match your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTags([])
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="personal" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {personalProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No personal projects match your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTags([])
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
