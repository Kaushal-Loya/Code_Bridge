"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/hero.gif"
        alt="hero"
        fill
        unoptimized
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 translate-y-[-10%] sm:translate-y-[-5%] lg:translate-y-[-20%]">
        <h1 className="font-game font-bold text-5xl sm:text-6xl lg:text-7xl text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]">
          Where Your
        </h1>

        <h1
          className="font-game font-bold text-yellow-400 text-7xl sm:text-8xl lg:text-9xl mt-2"
          style={{
            textShadow:
              "3px 3px 0 #e41f1f,-3px -3px 0 #d56b6b,3px -3px 0 #ffffff,-3px 3px 0 #ffe6e6",
          }}
        >
          Coding Era Begins
        </h1>

        <p className="font-game mt-6 text-xl sm:text-2xl lg:text-3xl text-white/90 drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
          Learn real-world coding with simple lessons and fun projects
        </p>

        <Button
          onClick={() => router.push("/dashboard")}
          variant="pixel"
          className="font-game text-2xl sm:text-3xl mt-8 px-8 py-6 cursor-pointer"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
