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
import ApkIcon from "../../../public/apk.png";
import { Button } from "../ui/button";
import { FileCode, Github, Globe } from "lucide-react";
import { Protest_Revolution } from "next/font/google";

const julius = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
});

function Projects() {
  const myProject = [
    {
      image: SImage,
      title: "LMS",
      badge: ["vue", "shadcn-vue", "nuxt", "supabase"],
      type: ["site", "apk", "source"],
      description:
        "A Learning Management System (LMS) is a software application designed to manage, deliver, and track educational courses or training programs.",
    },
    {
      image: SImage,
      title: "Weather Forecast App",
      badge: ["angular", "typescript"],
      type: ["site", "source"],
      description:
        "A Weather Forecast App that provides users with up-to-date weather information. It includes features like real-time weather updates, forecasts, and weather alerts to help users plan their activities accordingly.",
    },
    {
      image: SImage,
      title: "Project Management Tool",
      badge: ["react", "redux", "node", "express"],
      type: ["site", "source"],
      description:
        "A Project Management Tool designed to help teams plan, track, and manage their projects effectively. It provides features like task assignments, progress tracking, and collaboration tools, ensuring projects are completed on time and within budget.",
    },
    {
      image: SImage,
      title: "E-commerce Platform",
      badge: ["next.js", "tailwindcss", "mongodb"],
      type: ["site", "source"],
      description:
        "An E-commerce Platform that allows businesses to set up and manage online stores. It offers features like product listings, shopping cart, payment processing, and order management to streamline the online shopping experience.",
    },
    {
      image: SImage,
      title: "Social Media App",
      badge: ["flutter", "firebase"],
      type: ["apk", "source"],
      description:
        "A Social Media App developed to connect people and facilitate social interactions. It includes features like user profiles, posts, comments, and messaging, making it easy to share and communicate with others.",
    },
    {
      image: SImage,
      title: "Fitness Tracker",
      badge: ["react native", "expo", "firebase"],
      type: ["apk", "source"],
      description:
        "A Fitness Tracker App designed to help users monitor their fitness activities, set goals, and track progress. It includes features like workout logging, goal setting, and activity tracking to support a healthy lifestyle.",
    },
    {
      image: SImage,
      title: "Online Booking System",
      badge: ["django", "postgresql"],
      type: ["site", "source"],
      description:
        "An Online Booking System that enables businesses to manage bookings and reservations. It offers features like calendar integration, automated reminders, and payment processing to streamline the booking process.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center font-semibold uppercase text-4xl py-10">
        <p className={julius.className}> Projects</p>
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
              {project.type.includes("site") && (
                <Button>
                  <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Site
                </Button>
              )}
              {project.type.includes("apk") && (
                <Button className="ml-2">
                  <FileCode className="h-[1.2rem] w-[1.2rem] mr-2" />
                  APK File
                </Button>
              )}
              {project.type.includes("source") && (
                <Button className="ml-2">
                  <Github className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Source
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
