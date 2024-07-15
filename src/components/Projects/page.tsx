import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SImage from "../../../public/image.png";
import Disney from "../../../public/projectImage/disney.png";
import Lumax from "../../../public/projectImage/lumax.png";
import Movie from "../../../public/projectImage/movie.png";
import Fogera from "../../../public/projectImage/fogera.png";
import Ecommerce from "../../../public/projectImage/ecommerce.png";
import Amazone from "../../../public/projectImage/amazone.png";
import Booking from "../../../public/projectImage/booking.png";
import Jobs from "../../../public/projectImage/jobs.png";
import Threads from "../../../public/projectImage/threads.png";
import Tesla from "../../../public/projectImage/tesla.png";
import ApkIcon from "../../../public/apk.png";
import Spotify from "../../../public/projectImage/spotify.webp";
import Uber from "../../../public/projectImage/uber.webp";
import { Button } from "../ui/button";
import { FileCode, Github, Globe } from "lucide-react";

import Link from "next/link";

function Projects() {
  const myProject = [
    {
      image: Disney,
      title: "Walt Disney Clone",
      badge: ["React", "Redux", "Styled-components", "Firebase"],
      type: [
        {
          site: "https://desiny-plus.web.app/",
          apk: "",
          source: "https://github.com/ET-SPARK/Walt-Disny-Clone",
        },
      ],
      description:
        "The Walt Disney website clone, built with React, Redux, Styled-components, and Firebase, delivers a dynamic and interactive user experience. React ensures smooth navigation, Redux manages state efficiently, and Styled-components provide a modular design, while Firebase offers secure backend services. This project showcases advanced web development skills in creating a robust Disney site replication.",
    },
    {
      image: Lumax,
      title: "LUMAX Property",
      badge: ["React", "Node", "Express", "MongoDB"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Lumax",
        },
      ],
      description:
        "The LUMAX Property project, built with React, Node, Express, and MongoDB, provides a robust platform for property management and listings. React ensures a dynamic and responsive user interface, while Node and Express handle efficient server-side operations. MongoDB offers a scalable and flexible database solution for storing property data.",
    },
    {
      image: Movie,
      title: "Hulu-Movie",
      badge: ["React Native", "Tailwind css", "themoviedb AP"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/1U1IXKDkobp9Wz7kg6EEdtT9eLywzi_0o/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Movie",
        },
      ],
      description:
        "The Hulu-Movie project, built with React Native, Tailwind CSS, and the themoviedb API, offers a seamless and visually appealing mobile app for browsing movies. React Native ensures cross-platform compatibility, Tailwind CSS provides a modern and responsive design, and the themoviedb API supplies comprehensive movie data.",
    },
    {
      image: Fogera,
      title: "Engocha Food delivery",
      badge: ["React Native", "Firebase", "Chapa", "Map"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Mini-Fogera-food-delivery-app",
        },
      ],
      description:
        "The Engocha Food delivery project, built with React Native, Firebase, Chapa, and map integration, delivers a seamless and user-friendly mobile app for ordering food. React Native ensures cross-platform functionality, Firebase provides a robust backend, Chapa handles secure payments, and map integration facilitates efficient delivery tracking.",
    },
    {
      image: Ecommerce,
      title: "Ecommerce",
      badge: ["Next", "Sanity", "React Context", "Stripe"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/ecommerce",
        },
      ],
      description:
        "The Ecommerce project, built with Next.js, Sanity, React Context, and Stripe, creates a powerful and dynamic online shopping platform. Next.js ensures fast performance and SEO optimization, Sanity manages content efficiently, React Context handles state management, and Stripe provides secure payment processing.",
    },
    {
      image: Amazone,
      title: "Amazone Clone",
      badge: ["react ", "redux", "firebase", "stripe"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Amazone-clone",
        },
      ],
      description:
        "The Amazon clone project, built with React, Redux, Firebase, and Stripe, replicates the core functionalities of the popular e-commerce platform. React powers the user interface for a smooth shopping experience, while Redux manages application state effectively. Firebase serves as the backend for user authentication and data storage, and Stripe enables secure payment processing, creating a comprehensive online shopping solution.",
    },
    {
      image: Booking,
      title: "Hulu-Booking",
      badge: ["React Native", "redux", "mongoDb"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/1qVpGPaKbojtuqmB1yAlgJVA49pJZi_0X/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Booking-App",
        },
      ],
      description:
        "The Hulu-Booking project, built with React Native, Redux, and MongoDB, provides a user-friendly mobile app for hotel bookings. React Native ensures a smooth and responsive experience across devices, while Redux efficiently manages the application state. MongoDB serves as the backend database, allowing for scalable storage of hotel information and user data, creating an effective platform for travelers.",
    },
    {
      image: Jobs,
      title: "Hulu-Jobs",
      badge: ["React Native", "rapid API"],
      type: [
        {
          site: "",
          apk: "https://drive.google.com/file/d/18Om-Y22_e3nhpRbos4kQC1we23kGkHKC/view?usp=sharing",
          source: "https://github.com/ET-SPARK/Hulu-Job",
        },
      ],
      description:
        "The Hulu-Jobs project, built with React Native and RapidAPI, offers a mobile platform for job searching and applications. React Native provides a smooth, responsive user experience, while RapidAPI connects to various job listing APIs for real-time data access. This combination creates an efficient and user-friendly app for job seekers to explore opportunities and manage applications seamlessly.",
    },
    {
      image: Threads,
      title: "Threads-Clone",
      badge: ["React Native", "Node", "Express", "MongoDb"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Threads-clone-app",
        },
      ],
      description:
        "The Threads-Clone project, built with React Native, Node, Express, and MongoDB, replicates the core functionalities of a social media platform for sharing updates and engaging with users. React Native ensures a smooth and responsive mobile experience, while Node and Express handle backend server operations efficiently. MongoDB serves as the database, providing scalable storage for user data and posts, creating a robust environment for social interactions.",
    },
    {
      image: Spotify,
      title: "Spotify-Clone",
      badge: ["React Native", "Spotify API"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/spotify-clone",
        },
      ],
      description:
        "The Spotify-Clone project, built with React Native and the Spotify API, offers a mobile experience for streaming music and exploring playlists. React Native ensures a responsive and engaging user interface, while the Spotify API provides access to a vast library of songs, albums, and artist information. This project allows users to discover and enjoy music in a familiar layout, showcasing modern app development skills.",
    },
    {
      image: Uber,
      title: "Uber-Clone",
      badge: ["Next", "mapbox", "tailwindcss"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/uber-clone",
        },
      ],
      description:
        "The Uber-Clone project, built with Next.js, Mapbox, and Tailwind CSS, replicates the core functionalities of a ride-hailing service. Next.js ensures fast performance and SEO optimization, while Mapbox provides advanced mapping and geolocation features for tracking rides. Tailwind CSS offers a sleek, responsive design, creating an intuitive and user-friendly interface for both riders and drivers.",
    },
    {
      image: Tesla,
      title: "Tesla-Clone",
      badge: ["React Native"],
      type: [
        {
          site: "",
          apk: "",
          source: "https://github.com/ET-SPARK/Tesla-clone",
        },
      ],
      description:
        "The Tesla-Clone project, built with React Native, aims to replicate the sleek and innovative experience of the official Tesla app. With a focus on a responsive user interface, the app allows users to explore vehicle features, manage their electric vehicles, and access charging station information. This project showcases the ability to create a modern, user-friendly mobile application that reflects the cutting-edge technology of Tesla.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center font-semibold uppercase text-4xl py-10 drop-shadow-white">
        Projects
      </div>
      <div className="grid grid-cols-3 px-4 gap-6 max-[640px]:grid-cols-1 max-[1024px]:grid-cols-2">
        {myProject.map((project, index) => (
          <Card key={index}>
            <div className="relative">
              <Image
                src={project.image}
                alt="image"
                style={{ width: "100%" }}
                className="blur-md shadow-2xl absolute h-[220px]"
              />
              <CardHeader className="px-1 pt-1">
                <Image
                  src={project.image}
                  alt="image"
                  style={{ width: "100%" }}
                  className="rounded-xl z-10 h-[200px] "
                />
                <CardTitle className="pt-4">{project.title}</CardTitle>
                <div className="flex justify-between uppercase pt-4">
                  {project.badge.map((badge, idx) => (
                    <Badge key={idx}>{badge}</Badge>
                  ))}
                </div>
              </CardHeader>
            </div>
            <CardContent className="px-2">
              <CardDescription className="border-t pt-4  line-clamp-5 h-48">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="border-t pt-4 px-2">
              {project.type[0].site && (
                <Link
                  href={project.type[0].site}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Site
                  </Button>
                </Link>
              )}
              {project.type[0].apk && (
                <Link
                  href={project.type[0].apk}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="ml-2">
                    <FileCode className="h-[1.2rem] w-[1.2rem] mr-2" />
                    APK File
                  </Button>
                </Link>
              )}
              {project.type[0].source && (
                <Link
                  href={project.type[0].source}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="ml-2">
                    <Github className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Source
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
