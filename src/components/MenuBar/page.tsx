"use client";

import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Moon, Sun, Github, Send, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../../public/logo.svg";
import { motion } from "framer-motion";

export default function MenuBar() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };
  return (
    <Menubar className="border-x-0 border-t-0 border-b rounded-none flex justify-between py-8 items-center sticky top-0 z-50">
      <div>
        <MenubarMenu>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <Image
                src={LogoImage}
                width={120}
                height={100}
                alt="logo"
                className="drop-shadow-white"
              />
            </motion.button>
          </Link>
        </MenubarMenu>
      </div>
      <div className="flex items-center">
        <MenubarMenu>
          <Link href="https://github.com/ET-SPARK">
            <MenubarTrigger className="cursor-pointer hover:drop-shadow-white hover:shadow-4xl hover:shadow-white ">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="mailto:samuelwoyesso2016@gmail.com">
            <MenubarTrigger className="cursor-pointer hover:drop-shadow-white hover:shadow-4xl hover:shadow-white ">
              <Mail className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="http://t.me/rAsSpark">
            <MenubarTrigger className="cursor-pointer hover:drop-shadow-white hover:shadow-4xl hover:shadow-white ">
              <Send className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <div
            className="inline-flex hover:drop-shadow-white hover:shadow-4xl hover:shadow-white items-center justify-center p-1 cursor-pointer ml-10"
            onClick={toggleTheme}
          >
            <Sun
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
              }`}
            />
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </div>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
