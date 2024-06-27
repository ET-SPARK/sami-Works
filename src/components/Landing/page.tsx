import { FileText, Hand } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Jacquard_12_Charted, Protest_Revolution } from "next/font/google";

const julius = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
});
const shadows = Jacquard_12_Charted({
  weight: "400",
  subsets: ["latin"],
});

function Landing() {
  return (
    <div>
      <div className="text-center mt-10">
        <div className="flex justify-center text-[64px] font-light items-center">
          <div className={julius.className}>
            <div className="flex">
              {" "}
              <div> Hi, I'm</div>{" "}
              <div className="drop-shadow-white ml-2">Samuel</div>
            </div>
          </div>
        </div>
        <div className="font-light text-xl">
          Passionate fullstack developer, coding enthusiast & problem solver.
          Always striving for elegant solutions.
        </div>
        <div className="mt-10">
          <Link href="https://drive.google.com/uc?export=download&id=1eaxWvQ5IH9Ze9uEQNy0tfk1eBRn8IwAD">
            <Button className="uppercase ">
              <FileText className="mr-2 " />
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
