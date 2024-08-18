"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "@/components/ui/cover";
import PlaceholdersAndVanishInputDemo from "./input";

export default function ShootingStarsAndStarsBackgroundDemo() {
  

  return (
    <div className="h-screen rounded-md flex-row justify-center  min-w-full bg-black">
     <br/>
     <h1 className="text-4xl md:text-6xl xl:text-7xl mt-[40%] md:mt-[20%] lg:mt-[10%]  font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-violet-900 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
    <span> Lightning-Fast API for Real-Time</span>  <br />  <Cover> Content Moderation</Cover>
    
      </h1>
      <PlaceholdersAndVanishInputDemo/>
    
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
