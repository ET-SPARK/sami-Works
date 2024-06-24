import { FileText, Hand } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Jacquard_12_Charted } from "next/font/google";

const shadows = Jacquard_12_Charted({
  weight: "400",
  subsets: ["latin"],
});

function Landing() {
  return (
    <div>
      <div className="text-center mt-10">
        <div className="flex justify-center text-[64px] font-light items-center">
          <div>
            <Hand className="h-[4rem] w-[4rem] mr-4" />
          </div>
          <div className="">Hi, I'm Samuel</div>
        </div>
        <div className={shadows.className}>
          <p className="text-[32px]">
            {" "}
            Passionate fullstack developer, coding enthusiast & problem solver.
            Always striving for elegant solutions.
          </p>
        </div>
        <div className="mt-10">
          <Link href="https://drive.google.com/uc?export=download&id=1eaxWvQ5IH9Ze9uEQNy0tfk1eBRn8IwAD">
            <Button className="uppercase">
              <FileText className="mr-2" />
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
