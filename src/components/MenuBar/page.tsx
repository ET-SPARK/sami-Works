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

export default function MenuBar() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };
  return (
    <Menubar className="border-x-0 border-t-0 border-b rounded-none flex justify-between py-6">
      <div>
        <MenubarMenu>
          <MenubarTrigger>LOGO</MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex items-center">
        <MenubarMenu>
          <Link href="https://github.com/ET-SPARK">
            <MenubarTrigger className="cursor-pointer hover:bg-secondary">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="http://t.me/rAsSpark">
            <MenubarTrigger className="cursor-pointer hover:bg-secondary">
              <Mail className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="mailto:samuelwoyesso2016@gmail.com">
            <MenubarTrigger className="cursor-pointer hover:bg-secondary">
              <Send className="h-[1.2rem] w-[1.2rem]" />
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <div
            className="inline-flex hover:bg-secondary items-center justify-center p-2 border border-background rounded cursor-pointer bg-background ml-10"
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
