"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const WelcomeBanner = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border">
      <Image
        src="/machine.webp"
        alt="machine"
        width={100}
        height={100}
        className="rounded-lg"
      />

      <h2 className="font-game text-xl md:text-2xl leading-snug">
        Welcome back{" "}
        <span className="text-yellow-500">{user?.fullName}</span>, ready to
        learn something new?
      </h2>
    </div>
  );
};

export default WelcomeBanner;
