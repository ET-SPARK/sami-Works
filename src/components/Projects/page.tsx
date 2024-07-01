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
import ApkIcon from "../../../public/apk.png";
import { Button } from "../ui/button";
import { FileCode, Github, Globe } from "lucide-react";
import { Protest_Revolution } from "next/font/google";
import Link from "next/link";

const julius = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
});

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
        "This project is a faithful reproduction of Walt Disney's website, meticulously recreated using React, Redux, Styled-components, and Firebase. It serves as an educational and nostalgic tribute to Disney's legacy in entertainment and culture.",
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
        "A Weather Forecast App that provides users with up-to-date weather information. It includes features like real-time weather updates, forecasts, and weather alerts to help users plan their activities accordingly.",
    },
    {
      image: Movie,
      title: "Hulu-Movie",
      badge: ["React Native", "Tailwind css", "themoviedb AP"],
      type: [
        {
          site: "",
          apk: "https://expo.dev/artifacts/eas/o8HuSKAuvDkNZJd8iuk3SL.apk",
          source: "https://github.com/ET-SPARK/Hulu-Movie",
        },
      ],
      description:
        "A Project Management Tool designed to help teams plan, track, and manage their projects effectively. It provides features like task assignments, progress tracking, and collaboration tools, ensuring projects are completed on time and within budget.",
    },
    {
      image: SImage,
      title: "E-commerce Platform",
      badge: ["next.js", "tailwindcss", "mongodb"],
      type: [
        {
          site: "https://ecommerce-platform.com",
          apk: "",
          source: "https://github.com/username/ecommerce-platform",
        },
      ],
      description:
        "An E-commerce Platform that allows businesses to set up and manage online stores. It offers features like product listings, shopping cart, payment processing, and order management to streamline the online shopping experience.",
    },
    {
      image: SImage,
      title: "Social Media App",
      badge: ["flutter", "firebase"],
      type: [
        {
          site: "",
          apk: "https://apk-link.com/social-media-app",
          source: "https://github.com/username/social-media-app",
        },
      ],
      description:
        "A Social Media App developed to connect people and facilitate social interactions. It includes features like user profiles, posts, comments, and messaging, making it easy to share and communicate with others.",
    },
    {
      image: SImage,
      title: "Fitness Tracker",
      badge: ["react native", "expo", "firebase"],
      type: [
        {
          site: "",
          apk: "https://apk-link.com/fitness-tracker",
          source: "https://github.com/username/fitness-tracker",
        },
      ],
      description:
        "A Fitness Tracker App designed to help users monitor their fitness activities, set goals, and track progress. It includes features like workout logging, goal setting, and activity tracking to support a healthy lifestyle.",
    },
    {
      image: SImage,
      title: "Online Booking System",
      badge: ["django", "postgresql"],
      type: [
        {
          site: "https://online-booking-system.com",
          apk: "",
          source: "https://github.com/username/online-booking-system",
        },
      ],
      description:
        "An Online Booking System that enables businesses to manage bookings and reservations. It offers features like calendar integration, automated reminders, and payment processing to streamline the booking process.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center font-semibold uppercase text-4xl py-10 drop-shadow-white">
        <p className={julius.className}>Projects</p>
      </div>
      <div className="grid grid-cols-3 px-4 gap-4 max-[640px]:grid-cols-1 max-[1024px]:grid-cols-2">
        {myProject.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={project.image}
                alt="image"
                width={400}
                height={400}
                className="rounded-xl"
              />
              <CardTitle>{project.title}</CardTitle>
              <div className="flex justify-between uppercase pt-4">
                {project.badge.map((badge, idx) => (
                  <Badge key={idx}>{badge}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="border-t pt-4 line-clamp-5 h-48">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="border-t pt-4">
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
