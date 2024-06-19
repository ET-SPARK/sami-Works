"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function MenuBar() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>LOGO</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>RESUME</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>WORKS</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>BLOG</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>CONTACT</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <div
          className="inline-flex items-center justify-center p-2 border border-background rounded cursor-pointer bg-background"
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
    </Menubar>
  );
}
