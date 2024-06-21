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
import { Github, Globe } from "lucide-react";

function Projects() {
  const myProject = [
    {
      image: { SImage },
      title: "LMS",
      badge: ["vue", "shadcn-vue", "nuxt", "supabase"],
      type: ["site", "apk", "source"],
      description:
        "A Learning Management System (LMS) is a software application designed to manage, deliver, and track educational courses or training programs. It provides educators with tools to create and distribute content, assess student performance, and facilitate communication within a virtual learning environment. LMS platforms support various learning activities, including online quizzes, discussion forums, and multimedia content, enabling a comprehensive approach to education.",
    },
  ];
  return (
    <div className="mt-10">
      <div className="text-center font-semibold uppercase text-4xl py-10">
        Projects
      </div>
      <div className="grid grid-cols-3 px-4 gap-4">
        <Card className="">
          <CardHeader>
            <Image
              src={SImage}
              alt="image"
              width={400}
              height={400}
              className="rounded-xl"
            />
            <CardTitle>LMS</CardTitle>
            <div className="flex justify-between uppercase pt-4">
              <Badge>VUE</Badge>
              <Badge>Shadcn-vue</Badge>
              <Badge>NUXT</Badge>
              <Badge>Supabase</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="border-t pt-4">
              A Learning Management System (LMS) is a software application
              designed to manage, deliver, and track educational courses or
              training programs. It provides educators with tools to create and
              distribute content, assess student performance, and facilitate
              communication within a virtual learning environment. LMS platforms
              support various learning activities, including online quizzes,
              discussion forums, and multimedia content, enabling a
              comprehensive approach to education.
            </CardDescription>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button>
              <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
              Site
            </Button>
            <Button className="ml-2">
              <Image
                src={ApkIcon}
                alt="image"
                className="h-[1.2rem] w-[1.2rem] mr-2"
              />
              APK File
            </Button>
            <Button className="ml-2">
              <Github className="h-[1.2rem] w-[1.2rem] mr-2" />
              Source
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
