import { FileText } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Landing() {
  return (
    <div>
      <div className="text-center mt-10">
        <div className="flex justify-center text-[64px] max-[640px]:text-[24px] font-light items-center">
          <div className="flex">
            <div> Hi, I&apos;m</div>
            <div className="drop-shadow-white ml-2">Samuel</div>
          </div>
        </div>
        <div className="font-light text-xl max-[640px]:text-[18px]">
          Passionate fullstack developer, coding enthusiast & problem solver.
          Always striving for elegant solutions.
        </div>
        <div className="mt-10 max-[640px]:text-[24px]">
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
